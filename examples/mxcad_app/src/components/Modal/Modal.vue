<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { useModalVisible } from "./hooks";
// 调用 Hook（确保 useModalVisible 使用 @vue/composition-api）
const { isModalVisible, hideModal, modalOptions } = useModalVisible();

@Component({
  name: "Modal",
})
export default class Modal extends Vue {
  // 从 useModalVisible 解构的状态和方法
  isModalVisible = isModalVisible;
  hideModal = hideModal;
  modalOptions = modalOptions;

  // 本地响应式数据
  isEn: boolean = false;

  // 监听 isModalVisible 的变化
  @Watch("isModalVisible")
  onIsModalVisibleChange(newVal: boolean): void {
    if (newVal) {
      this.isEn = localStorage.getItem("language") === "en";
    }
  }

  // 可选：提供 t 方法给模板使用
  t = (key: string) => key;
}
</script>
<template>
  <!-- Modal -->
  <div class="modal-wrapper" id="modal" v-if="isModalVisible">
    <div class="modal-body card">
      <div class="modal-header">
        <h2 class="heading">{{ modalOptions.title }}</h2>
        <a
          href="#!"
          @click="hideModal"
          role="button"
          class="close"
          aria-label="close this modal"
        >
          <svg viewBox="0 0 24 24">
            <path
              d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
            />
          </svg>
        </a>
      </div>
      <div style="overflow-y: auto; height: 500px">
        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Open_DemoCode')"
          >
            {{ t("下载开Demo代码") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Open_DevInstall')"
          >
            {{ t("下载开发包") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.ondrawline"
          >
            {{ t("调用画圆线命令") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_DrawLine')"
          >
            {{ t("交互画直线") }}
          </button>
        </div>
        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_AddLayer')"
          >
            {{ t("添加图层") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_GetAllLayer')"
          >
            {{ t("得到所有图层") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_GetAllTextStyle')"
          >
            {{ t("得到所有文字样式") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_GetAllBlock')"
          >
            {{ t("得到所有图块") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_GetAllLinetype')"
          >
            {{ t("得到所有线型") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_WritexData')"
          >
            {{ t("写扩展数据") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_ReadxData')"
          >
            {{ t("读扩展数据") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_InsertBlock')"
          >
            {{ t("测试插入一个图块") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawLine')"
          >
            {{ t("绘直线") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawArc')"
          >
            {{ t("绘圆弧") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawCircle')"
          >
            {{ t("绘圆") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawPolyline')"
          >
            {{ t("绘PL线") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawHatch')"
          >
            {{ t("绘填充") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawText')"
          >
            {{ t("绘文字") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_Ellipse')"
          >
            {{ t("绘椭圆") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_EllipseArc')"
          >
            {{ t("绘椭圆弧") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_MText')"
          >
            {{ t("绘制多行文字") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawTable')"
          >
            {{ t("绘制表格") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_InsertStamp')"
          >
            {{ t("插入图章") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_ScreenToBmp')"
          >
            {{ t("屏幕截图bmp") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.ongetallentity"
          >
            {{ t("得到所有对象") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_SelectEntity')"
          >
            {{ t("交互选择对象") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Export_MxWeb')"
          >
            {{ t("保存mxweb到服务器") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_GetSysVars')"
          >
            {{ t("得到系统变量") }}
          </button>
        </div>
        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_NewFile')"
          >
            {{ t("新建图纸") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_ViewBackgroundColor')"
          >
            {{ t("白色背景色") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_FindText')"
          >
            {{ t("文字查找定位") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_SelectEntitysToBlock')"
          >
            {{ t("选择实体做块") }}
          </button>
        </div>
        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_Text')"
          >
            {{ t("绘制单行文字") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_DrawHatchFormPoint')"
          >
            {{ t("选点填充") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_TestExProp')"
          >
            {{ t("设置扩展属性") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DimAligned')"
          >
            {{ t("绘制对齐标注") }}
          </button>
        </div>
        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawDimRotated')"
          >
            {{ t("绘性线标注") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawDimAngular')"
          >
            {{ t("角度标注") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_LineTypeTest')"
          >
            {{ t("修改对象线型") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_SelectEntitHideLayer')"
          >
            {{ t("选择隐藏对象层") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_TestAddCurrentSelect')"
          >
            {{ t("添加到当前选择") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_TestSetViewAngle')"
          >
            {{ t("视区旋转") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_WriteXRecord')"
          >
            {{ t("写扩展记录") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_GetNamedObjectsDictionary')"
          >
            {{ t("得到命名字典") }}
          </button>
        </div>
        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_AddTextStyleTable')"
          >
            {{ t("添加文字样式") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_DrawCustomEntity')"
          >
            {{ t("绘自定义实体") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_ChangeColor')"
          >
            {{ t("修改对象颜色") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_ChangeVisible')"
          >
            {{ t("修改对象不可见") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_ChangeEntityLayer')"
          >
            {{ t("修改对象层") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_ChaneEntityDrawOrder')"
          >
            {{ t("修改对象显示顺序") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Export_Pdf')"
          >
            {{ t("指定范围输出pdf") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawImage')"
          >
            {{ t("绘制image") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_GetObjectExDictionaryData')"
          >
            {{ t("读取对象扩展字典") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_Draw3DPolyline')"
          >
            {{ t("绘制3DPolyline") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_LineText')"
          >
            {{ t("绘线文本自定义实体") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_IntersectWith')"
          >
            {{ t("计算交点") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_TrueText')"
          >
            {{ t("修改文字样式") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_OffsetIn_DrawLine')"
          >
            {{ t("偏移输入画线") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_CreateGroup')"
          >
            {{ t("创建组") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_ScreenToJpg')"
          >
            {{ t("屏幕截图jpg") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_GetText')"
          >
            {{ t("获取图纸相同文字") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Cut_Dwg')"
          >
            {{ t("指定范围输出dwg") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawMarkCircle')"
          >
            {{ t("测试绘制标记圆") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_Wipeout')"
          >
            {{ t("测试Wipeout") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="
              modalOptions.docommand('MxTest_SelectEntitysToSpatialFilterBlock')
            "
          >
            {{ t("创建剪切块") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawDimRotatedTol')"
          >
            {{ t("公差标注") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_ModifyAllEntityColor')"
          >
            {{ t("改所有对象颜色") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Cut_MxWeb')"
          >
            {{ t("切剪mxweb") }}
          </button>
        </div>

        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_SetCurrentlyDraw')"
          >
            {{ t("设置当前颜色线重") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_FindPolygonEntitys')"
          >
            {{ t("查找多边形区域内对象") }}
          </button>

          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_Explode')"
          >
            {{ t("打碎对象") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_Test_DrawTransparencyLine')"
          >
            {{ t("绘半透明线") }}
          </button>
        </div>
        <div class="btn_box">
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_LineRecord')"
          >
            {{ t("添加线型") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('MxTest_ModifyPatternScale')"
          >
            {{ t("修改图案比例") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_TestDrawBarCode')"
          >
            {{ t("绘制条形码") }}
          </button>
          <button
            :class="isEn ? 'button button2 btnEn' : 'button button2'"
            @click="modalOptions.docommand('Mx_TestdrawQrCode')"
          >
            {{ t("绘制二维码") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.heading {
  font-size: 1.5em;
  margin-bottom: 12px;
}

.card {
  background: #fff;
  color: #000;
  background-image: linear-gradient(48deg, #fff 0%, #e5efe9 100%);
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  box-shadow: -20px 20px 35px 1px rgba(10, 49, 86, 0.18);
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin: 40px;
  max-width: 400px;
  width: 100%;
  .btnEn {
    font-size: 0.7em;
  }
}

.content-wrapper {
  font-size: 1.1em;
  margin-bottom: 44px;
}

.content-wrapper:last-child {
  margin-bottom: 0;
}

.button {
  align-items: center;
  background: #e5efe9;
  border: 1px solid #5a72b5;
  border-radius: 4px;
  color: #121943;
  cursor: pointer;
  display: flex;
  font-size: 1em;
  font-weight: 700;
  height: 40px;
  justify-content: center;
  width: 180px;
}

.button:focus {
  border: 2px solid transparent;
  box-shadow: 0px 0px 0px 2px #121943;
  outline: solid 4px transparent;
}

.link {
  color: #121943;
}

.link:focus {
  box-shadow: 0px 0px 0px 2px #121943;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-wrapper .label {
  align-items: baseline;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  margin-bottom: 8px;
}

.input-wrapper .optional {
  color: #5a72b5;
  font-size: 0.9em;
}

.input-wrapper .input {
  border: 1px solid #5a72b5;
  border-radius: 4px;
  height: 40px;
  padding: 8px;
}

code {
  background: #e5efe9;
  border: 1px solid #5a72b5;
  border-radius: 4px;
  padding: 2px 4px;
}

.modal-header {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
}

.close {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  height: 16px;
  text-decoration: none;
  width: 16px;
}

.close svg {
  width: 16px;
}

.modal-wrapper {
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

#modal {
  transition: opacity 0.25s ease-in-out;
}

#modal .modal-body {
  max-width: 830px;
  opacity: 1;
  transform: translateY(-100px);
  transition: opacity 0.25s ease-in-out;
  width: 100%;
  z-index: 1;
}

.outside-trigger {
  bottom: 0;
  cursor: default;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

.button__link {
  text-decoration: none;
}

.button {
  background-color: #4caf50;
  /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s;
  /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  overflow: hidden;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
}

.button1:hover {
  background-color: #4caf50;
  color: white;
}

.button2 {
  background-color: white;
  color: black;
  border: 2px solid #008cba;
}

.button2:hover {
  background-color: #008cba;
  color: white;
}

.btn_box {
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: start;
  align-items: start;
}
.btn span,
.button span,
.btn,
.button {
  display: block;
  align-items: center;
  justify-content: center;
  font-size: clamp(5px, 1vw, 1em);
  max-width: 100%;
  max-height: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: normal;
  padding: 0 8px;
  min-width: 0;
}
</style>
