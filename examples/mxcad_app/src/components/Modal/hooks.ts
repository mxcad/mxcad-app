///////////////////////////////////////////////////////////////////////////////
//版权所有（C）2002-2022，成都梦想凯德科技有限公司。
//本软件代码及其文档和相关资料归成都梦想凯德科技有限公司,应用包含本软件的程序必须包括以下版权声明
//此应用程序应与成都梦想凯德科技有限公司达成协议，使用本软件、其文档或相关材料
//https://www.mxdraw.com/
///////////////////////////////////////////////////////////////////////////////

import { ref } from "vue";
import { getMxCADUi } from "../index"

const isModalVisible = ref(false);
const isToolsVisible = ref(false);
// 显示测试模块
const showModal = (options?: Partial<typeof modalOpts>) => {
  isModalVisible.value = true;
  isToolsVisible.value = false;
  modalOptions.value = Object.assign(modalOptions.value, options || {});
};
// 显示扩展工具模块
const showTools = (options?: Partial<typeof modalOpts>) => {
  isToolsVisible.value = true;
  isModalVisible.value = false;
  modalOptions.value = Object.assign(modalOptions.value, options || {});
};
const hideModal = () => {
  isModalVisible.value = false;
  isToolsVisible.value = false;
};
const modalOpts = {
  title: "Modal",
  text: "",
  oncancel: hideModal,
  onsubmit: hideModal,
  ongetallentity: hideModal,
  ondrawline: hideModal,
  docommand: (cmd) => { }
}

const modalOptions = ref(modalOpts)

// 提取文字
const isDialogVisible = ref(false);
const excelText = ref('');

// 监听选中文本
const text = ref('');
document.addEventListener('mouseup', function () {
  text.value = document.getSelection().toString();
  if (text.value === '') {
    text.value = excelText.value;
  }
});

async function copyTextToClipboard() {
  try {
    await navigator.clipboard.writeText(text.value);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
export const useModalVisible = () => {
  return {
    isModalVisible,
    isToolsVisible,
    isDialogVisible,
    showModal,
    showTools,
    hideModal,
    modalOptions,
    excelText,
    copyTextToClipboard,
  }
}

