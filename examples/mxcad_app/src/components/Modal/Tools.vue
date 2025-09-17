<!-- ModalComponent.vue -->
<script lang="ts">
import { Component, Vue, Watch, Ref } from "vue-property-decorator";
import { useModalVisible } from "./hooks";

// 调用自定义 Hook（确保 useModalVisible 使用的是 Vue 2 兼容的 Composition API）
const {
  isToolsVisible,
  hideModal,
  modalOptions,
  isDialogVisible,
  excelText,
  copyTextToClipboard,
} = useModalVisible();

@Component({
  name: "Tools",
})
export default class ModalComponent extends Vue {
  // 从 useModalVisible 解构的状态和方法（它们已经是响应式的）
  isToolsVisible = isToolsVisible;
  hideModal = hideModal;
  modalOptions = modalOptions;
  isDialogVisible = isDialogVisible;
  excelText = excelText;
  copyTextToClipboard = copyTextToClipboard;

  // 本地响应式数据
  btn_id: string = "fit";

  // 使用 @Ref 装饰器绑定模板中的 ref="model"
  @Ref("model")
  model!: HTMLElement | null;

  // 是否英文界面
  isEn: boolean = false;

  // 监听 isToolsVisible 的变化
  @Watch("isToolsVisible")
  onIsToolsVisibleChange(newVal: boolean): void {
    if (newVal) {
      this.isEn = localStorage.getItem("language") === "en";
    }
  }

  // 拖拽移动窗口
  dragModal(event: MouseEvent): void {
    const dragBox = this.model;
    if (!dragBox) return;

    const disX = event.clientX - dragBox.offsetLeft;
    const disY = event.clientY - dragBox.offsetTop;

    const moveDrag = (e: MouseEvent) => {
      dragBox.style.left = `${e.clientX - disX}px`;
      dragBox.style.top = `${e.clientY - disY}px`;
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", moveDrag);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", moveDrag);
    document.addEventListener("mouseup", stopDrag);
  }

  t = (key: string) => key;
}
</script>
<template>
  <div>
    <!-- Modal -->
    <div class="modal-wrapper" id="modal" v-if="isToolsVisible">
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
        <div
          style="
            border-bottom: 2px solid #008cba;
            margin-bottom: 8px;
            display: flex;
            flex-wrap: wrap;
          "
        >
          <button
            v-for="item in [
              { name: t('修改工具'), id: 'fit' },
              { name: t('文字工具'), id: 'text' },
              { name: t('绘图工具'), id: 'draw' },
              { name: t('块工具'), id: 'block' },
              { name: t('测量工具'), id: 'count' },
              { name: t('标注工具'), id: 'dimension' },
              { name: t('其他工具'), id: 'other' },
            ]"
            :key="item.id"
            @click="
              () => {
                btn_id = item.id;
              }
            "
            :class="btn_id === item.id ? 'btn btn2' : 'btn'"
            :style="isEn ? 'font-size:var(--mx-font-size)' : ''"
          >
            {{ item.name }}
          </button>
        </div>
        <div style="overflow-y: auto; height: 500px" v-show="btn_id === 'fit'">
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Multicopy')"
            >
              {{ t("多重复制") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ArcToCircle')"
            >
              {{ t("弧转圆") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_CopyRotation')"
            >
              {{ t("复制旋转") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_CricleTotoll')"
            >
              {{ t("圆转多边") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ChangeColor')"
            >
              {{ t("修改颜色") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ArcToAngle')"
            >
              {{ t("圆弧切角") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_TemHiding')"
            >
              {{ t("临时隐藏") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BoxDel')"
            >
              {{ t("方框删除") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_AngleCopy')"
            >
              {{ t("角度复制") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_VertexRep')"
            >
              {{ t("顶点复制") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_IntersectBreak')"
            >
              {{ t("交点打断") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_DoubleOff')"
            >
              {{ t("双向偏移") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_EitCircle')"
            >
              {{ t("改圆大小") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_LayerTypeScale')"
            >
              {{ t("线型比例") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Telescoping')"
            >
              {{ t("伸缩") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ArcOrder')"
            >
              {{ t("按弧阵列") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_PlRoundCorners')"
            >
              {{ t("pl圆角") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_PlReverse')"
            >
              {{ t("pl线反向") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_TestGetAllLineByLayer')"
            >
              {{ t("得到所有直线对象") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Bisection')"
            >
              {{ t("等分") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_RectangularScaling')"
            >
              {{ t("矩形缩放") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Interrupt')"
            >
              {{ t("打断") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_PolygonClipping')"
            >
              {{ t("切割多边形") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_MergePolygons')"
            >
              {{ t("合并多边形") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_AddVertex')"
            >
              {{ t("添加多边形顶点") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_DeleteVertex')"
            >
              {{ t("删除多边形顶点") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_StretchPolygon')"
            >
              {{ t("多边形单边拉伸") }}
            </button>
          </div>
        </div>
        <div style="overflow-y: auto; height: 500px" v-show="btn_id === 'draw'">
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_DrawStart')"
            >
              {{ t("星形") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ConcavoVex')"
            >
              {{ t("凹凸线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ZigzagLine')"
            >
              {{ t("锯齿线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_CenterRect')"
            >
              {{ t("中心矩形") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_RREC')"
            >
              {{ t("圆角矩形") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_CCLine')"
            >
              {{ t("圆中心线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Piping')"
            >
              {{ t("管道") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_CutPipeline')"
            >
              {{ t("剖管符") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_PerpLine')"
            >
              {{ t("中垂线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_StairLine')"
            >
              {{ t("楼梯") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_SolidCircle')"
            >
              {{ t("实心圆") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_CottonInsulation')"
            >
              {{ t("保温棉") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_CenterLine')"
            >
              {{ t("中心线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_DoHole')"
            >
              {{ t("开洞") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_MassegeBox')"
            >
              {{ t("消息框") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_DatumSymbol')"
            >
              {{ t("基准符（1）") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_WelLine')"
            >
              {{ t("焊缝线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ConcentricCircles')"
            >
              {{ t("同心圆") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Gear')"
            >
              {{ t("齿轮") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BlkCenterLine')"
            >
              {{ t("块中心线") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_RoundCutPublicLine')"
            >
              {{ t("圆公切线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_DatumSymbol2')"
            >
              {{ t("基准符（2）") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_InsterFrame')"
            >
              {{ t("插入图框") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_drawRoads')"
            >
              {{ t("绘制道路") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_DrawPolygon')"
            >
              {{ t("绘任意多边形") }}
            </button>
          </div>
        </div>
        <div style="overflow-y: auto; height: 500px" v-show="btn_id === 'text'">
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_AlignByLine')"
            >
              {{ t("按线对齐") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_TextHeight')"
            >
              {{ t("改字高") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_TextWidth')"
            >
              {{ t("改字宽") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BrushCon')"
            >
              {{ t("刷内容") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ReplaceCon')"
            >
              {{ t("换内容") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_AlignLeft')"
            >
              {{ t("左右对齐") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_AlignUp')"
            >
              {{ t("上下对齐") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_TextReversal')"
            >
              {{ t("文字反转") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_TextTraming')"
            >
              {{ t("文字加框") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Underline')"
            >
              {{ t("下划线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_TitleLine')"
            >
              {{ t("图名线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Case')"
            >
              {{ t("大小写") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_NumSum')"
            >
              {{ t("数字求和") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_SSWords')"
            >
              {{ t("选特定字") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Prefix')"
            >
              {{ t("前后缀") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ConnectText')"
            >
              {{ t("连接文字") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_TextTrim')"
            >
              {{ t("去空格") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_VerticalText')"
            >
              {{ t("文字竖向") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_AlignByArc')"
            >
              {{ t("按弧对齐") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_EditTextStyle')"
            >
              {{ t("修改全局文字样式") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ExtractText')"
            >
              {{ t("提取文字") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_NumberText')"
            >
              {{ t("文字编号") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_MultipleToMText')"
            >
              {{ t("多单转一多") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_TextToMText')"
            >
              {{ t("单转多") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_MTextToMultiple')"
            >
              {{ t("多转多个单") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_MTextToSingle')"
            >
              {{ t("多转单个单") }}
            </button>
          </div>
        </div>
        <div
          style="overflow-y: auto; height: 500px"
          v-show="btn_id === 'block'"
        >
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ChangeBN')"
            >
              {{ t("改块名") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BushBlk')"
            >
              {{ t("刷块") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ConBlk')"
            >
              {{ t("块连线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BlkCenterLine')"
            >
              {{ t("块中心线") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BlkPt')"
            >
              {{ t("改块基点") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BlkColor')"
            >
              {{ t("改块颜色") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BlkRotate')"
            >
              {{ t("多块旋转") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BlkScale')"
            >
              {{ t("多块缩放") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BlkAngle')"
            >
              {{ t("刷块角度") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BlkSelect')"
            >
              {{ t("按块选择") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BlkAllSelect')"
            >
              {{ t("按块全选") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_SSBlk')"
            >
              {{ t("统计单块") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_SMBlk')"
            >
              {{ t("统计多块") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_BlkLayer')"
            >
              {{ t("修改块图层") }}
            </button>
          </div>
        </div>
        <div
          style="overflow-y: auto; height: 500px"
          v-show="btn_id === 'count'"
        >
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_StaLength')"
            >
              {{ t("长度") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_StaArea')"
            >
              {{ t("统计面积") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Elevation')"
            >
              {{ t("智能标高") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Area')"
            >
              {{ t("面积") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ReactArea')"
            >
              {{ t("矩形面积") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_DistFromPointToLine')"
            >
              {{ t("点到直线的距离") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ArcLength')"
            >
              {{ t("弧长") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_MeasuringCircle')"
            >
              {{ t("测量圆") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ContinueMeasurement')"
            >
              {{ t("连续测量") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_CountList')"
            >
              {{ t("查看分段长度") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_AreaArc')"
            >
              {{ t("面积含弧线") }}
            </button>
          </div>
        </div>
        <div
          style="overflow-y: auto; height: 500px"
          v-show="btn_id === 'dimension'"
        >
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Approval')"
            >
              {{ t("审图标注") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_AnnotatedRectangle')"
            >
              {{ t("矩形标注") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Roughness')"
            >
              {{ t("粗糙度标注") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_CoordAnnotation')"
            >
              {{ t("坐标标注") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_StandardSlope')"
            >
              {{ t("标斜率") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Alignment')"
            >
              {{ t("对齐") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Enlarge')"
            >
              {{ t("局部放大") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_indexSymbol')"
            >
              {{ t("序号标注") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_RotationLabel')"
            >
              {{ t("旋转标注") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_RoundHoleMark')"
            >
              {{ t("圆孔标记") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_weldSymbol')"
            >
              {{ t("焊缝符号") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_DirectionaSymbol')"
            >
              {{ t("向视符号") }}
            </button>
          </div>
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_WeldingSymbol')"
            >
              {{ t("焊接符号") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_Test_DrawGT')"
            >
              {{ t("形位公差") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('MxTest_DrawRayAnnotation')"
            >
              {{ t("射线标注") }}
            </button>
          </div>
        </div>
        <div
          style="overflow-y: auto; height: 500px"
          v-show="btn_id === 'other'"
        >
          <div class="btn_box">
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_ReactChangeColor')"
            >
              {{ t("矩形标注悬停变色") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('MxTest_DrawArrowLine')"
            >
              {{ t("箭头直线") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('Mx_TestGetTable')"
            >
              {{ t("提取表格") }}
            </button>
            <button
              :class="isEn ? 'button button2 btnEn' : 'button button2'"
              @click="modalOptions.docommand('MxTest_FixedViewRange')"
            >
              {{ t("固定视图范围") }}
            </button>
            <!-- <button :class="isEn ? 'button button2 btnEn' : 'button button2'" @click="modalOptions.docommand('Mx_TestEditTable')">{{ t("在线编辑表格") }}</button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="textBox" v-if="isDialogVisible" ref="model">
      <div class="header" @mousedown="dragModal">
        <span>{{ t("选择的文字") }}</span>
        <a
          href="#!"
          @click="isDialogVisible = false"
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
      <textarea
        rows="20"
        cols="50"
        @focus="() => setCommandFocus(false)"
        @blur="() => setCommandFocus(true)"
        v-model="excelText"
      ></textarea>
      <div class="btnBox">
        <button @click="copyTextToClipboard">{{ t("复制到剪贴板") }}</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.heading {
  font-size: 1.5em;
  margin-bottom: 12px;
}

.btn {
  height: 40px;
  width: 100px;
  text-align: center;
  line-height: 40px;
  font-size: 1em;
  font-weight: 700;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.btn2 {
  background-color: #008cba;
  color: #fff;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
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
  height: 600px;
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
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s;
  /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
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

.textBox {
  position: absolute;
  top: 30%;
  left: 42%;
  background-image: linear-gradient(48deg, #fff 0%, #e5efe9 100%);
  color: #000;
  padding: 10px 15px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  textarea {
    color: #000;
    background-color: #ccc;
    border: 1px solid #5a72b5;
    border-radius: 8px;
    margin-top: 10px;
    font-size: var(--mx-font-size);
    padding: 5px;
  }

  .btnBox {
    display: flex;
    justify-content: flex-end;

    button {
      background-color: white;
      color: black;
      border: 2px solid #008cba;
      border-radius: 5px;
      padding: 5px;
      margin-top: 10px;

      &:hover {
        background-color: #008cba;
        color: white;
      }
    }
  }
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


