export interface MxSketchesAndNotesUiConfigMMenuDataListItemListPropsStyle {
  padding: string;
  [k: string]: any;
}

/**
 * 支持绑定更多组件属性组件属性 默认绑定在div 标签上 支持自定义组件 绑定属性
 */
export interface MxSketchesAndNotesUiConfigMMenuDataListItemListProps {
  style: MxSketchesAndNotesUiConfigMMenuDataListItemListPropsStyle;
  [k: string]: any;
}

export interface MxSketchesAndNotesUiConfigMMenuDataListItemListListItem {
  /**
   * 名称
   */
  tab: string;
  /**
   * 图标
   */
  icon: string;
  /**
   * 命令
   */
  cmd: string;
  [k: string]: any;
}

/**
 * 面板内容数据集
 */
export interface MxSketchesAndNotesUiConfigMMenuDataListItemListItem {
  /**
   * 面板按钮名称
   */
  tab: string;
  /**
   * 图标
   */
  icon: string;
  /**
   * 命令
   */
  cmd: string;
  /**
   * 图标大小 支持的值: small | large 默认是small
   */
  size?: string;
  /**
   * 是否显示箭头 默认显示
   */
  labelWithArrowLayout?: boolean;
  /**
   * 是否是列布局 默认行布局
   */
  col?: boolean;
  /**
   * 是否显示标签 默认不显示
   */
  isShowLabel?: boolean;
  /**
   * 是否将按钮显示到主面板 默认不显示 ，不显示则只有点击扩展面板在扩展面板中显示图标
   */
  isShowToMainPanel?: boolean;
  props?: MxSketchesAndNotesUiConfigMMenuDataListItemListProps;
  /**
   * 按钮点击下拉图标弹出的菜单数据，如果type是group那么list的数据应该是面板按钮数据（相当于包了一个div元素盒子）
   */
  list?: MxSketchesAndNotesUiConfigMMenuDataListItemListListItem[];
  /**
   * 鼠标移动到按钮上是否在移动到菜单箭头图标时单独高亮(将tab名称和菜单图标单独分开点击)
   */
  isSeparateMenuArrowIcon?: boolean;
  /**
   * 是否将按钮显示到面板右侧
   */
  isShowToMainPanelRight?: boolean;
  /**
   * 命令选项参数 当命令运行是有些命令支持提供选项进行相关操作， commandOptions是将每一步的选项进行自动选择， 比如开始运行命令不选择选项就填空字符串，用户执行下一步出现新的选项，这里填C那么选项C自动触发进行下一步
   */
  commandOptions?: string[];
  [k: string]: any;
}

export interface MxSketchesAndNotesUiConfigMMenuDataListItem {
  /**
   * 面板名称
   */
  tab: string;
  /**
   * 图标
   */
  icon: string;
  /**
   * 展开面板是否与未展开面板时的面板是相同的宽度
   */
  sameWidth: boolean;
  /**
   * 面板内容数据集
   */
  list: MxSketchesAndNotesUiConfigMMenuDataListItemListItem[];
  [k: string]: any;
}

/**
 * 菜单数据
 */
export interface MxSketchesAndNotesUiConfigMMenuDataItem {
  /**
   * 标签名称
   */
  tab: string;
  /**
   * 标签内容数据集
   */
  list: MxSketchesAndNotesUiConfigMMenuDataListItem[];
  [k: string]: any;
}

export interface MxSketchesAndNotesUiConfig {
  /**
   * 菜单数据
   */
  mMenuData: MxSketchesAndNotesUiConfigMMenuDataItem[];
  [k: string]: any;
}
