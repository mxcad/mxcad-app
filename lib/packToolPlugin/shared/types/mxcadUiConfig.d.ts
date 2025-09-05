/**
 * 自定义头部右侧按钮右侧
 */
export interface MxcadUiConfigHeaderTopBarCustomRightBtnsItem {
  icon: string;
  cmd: string;
  prompt: string;
  openPromptDelay: number;
  [k: string]: any;
}

/**
 * 标题按钮栏数据
 */
export interface MxcadUiConfigMTitleButtonBarDataItem {
  prompt: string;
  icon: string;
  cmd: string;
  [k: string]: any;
}

/**
 * 顶部按钮栏
 */
export interface MxcadUiConfigMTopButtonBarDataItem {
  icon: string;
  prompt: string;
  cmd: string;
  [k: string]: any;
}

export interface MxcadUiConfigMLeftButtonBarDataButtonBarDataItem {
  icon: string;
  prompt: string;
  cmd: string;
  [k: string]: any;
}

export interface MxcadUiConfigMLeftButtonBarData {
  isShow: boolean;
  buttonBarData: MxcadUiConfigMLeftButtonBarDataButtonBarDataItem[];
  [k: string]: any;
}

export interface MxcadUiConfigMRightButtonBarDataButtonBarDataItem {
  icon: string;
  cmd: string;
  prompt: string;
  [k: string]: any;
}

export interface MxcadUiConfigMRightButtonBarData {
  isShow: boolean;
  buttonBarData: MxcadUiConfigMRightButtonBarDataButtonBarDataItem[];
  [k: string]: any;
}

export interface MxcadUiConfigMMenuBarDataListItem {
  tab: string;
  icon: string;
  cmd: string;
  [k: string]: any;
}

/**
 * 菜单栏数据
 */
export interface MxcadUiConfigMMenuBarDataItem {
  tab: string;
  isResponsive?: boolean;
  cmd?: string;
  icon?: string;
  list: MxcadUiConfigMMenuBarDataListItem[];
  [k: string]: any;
}

export interface MxcadUiConfigMRightMenuDataItem {
  label: string;
  tips: string;
  cmd: string;
  [k: string]: any;
}

export interface MxcadUiConfigMRightMenuDataCommandRuningItem {
  label: string;
  tips: string;
  execute_operations: number;
  [k: string]: any;
}

export interface MxcadUiConfigMRightMenuDataCommandRuningOsnapSetItem {
  label: string;
  tips: string;
  set_osnap_type: number;
  [k: string]: any;
}

export interface MxcadUiConfigMRightMenuDataSelectEntityItem {
  label: string;
  tips: string;
  cmd: string;
  [k: string]: any;
}

export interface MxcadUiConfig {
  /**
   * 浏览器标签页标题
   */
  title: string;
  /**
   * 设置UI界面Header<version>自动替换为当前版本号
   */
  headerTitle: string;
  /**
   * 在header部分是否显示当前打开的图纸名称
   */
  isShowNameOCurrentlyOpenDrawing: boolean;
  isShowHeader: boolean;
  /**
   * logo图标 布尔值false表示不显示, 也可以自行设置网络图片地址
   */
  logoImg: boolean;
  /**
   * 头部标题栏显示隐藏 为false 则logoImg失效
   */
  isShowHeaderTopBar: boolean;
  /**
   * 头部标题栏右侧按钮显示隐藏
   */
  isShowHeaderTopBarRightBtns: boolean;
  /**
   * 头部右侧按钮标识， 未填写则不显示
   */
  headerTopBarRightBtns: string[];
  /**
   * 自定义头部右侧按钮右侧
   */
  headerTopBarCustomRightBtns: MxcadUiConfigHeaderTopBarCustomRightBtnsItem[];
  isShowTitleButtonBar: boolean;
  /**
   * 标题按钮栏数据
   */
  mTitleButtonBarData: MxcadUiConfigMTitleButtonBarDataItem[];
  isShowTopButtonBar: boolean;
  /**
   * 顶部按钮栏
   */
  mTopButtonBarData: MxcadUiConfigMTopButtonBarDataItem[];
  /**
   * 左侧按钮栏
   */
  mLeftButtonBarData: MxcadUiConfigMLeftButtonBarData;
  /**
   * 右侧按钮栏
   */
  mRightButtonBarData: MxcadUiConfigMRightButtonBarData;
  isShowMenuBar: boolean;
  /**
   * 菜单栏数据
   */
  mMenuBarData: MxcadUiConfigMMenuBarDataItem[];
  mRightMenuData: MxcadUiConfigMRightMenuDataItem[];
  mRightMenuDataCommandRuning: MxcadUiConfigMRightMenuDataCommandRuningItem[];
  mRightMenuDataCommandRuningOsnapSet: MxcadUiConfigMRightMenuDataCommandRuningOsnapSetItem[];
  mRightMenuDataSelectEntity: MxcadUiConfigMRightMenuDataSelectEntityItem[];
  isShowFooter: boolean;
  /**
   * 底部左下角按钮，数组中存在对应的名称才会生成对应的开关按钮
   */
  footerRightBtnSwitchData: string[];
  /**
   * 模块导航栏显示
   */
  isShowModelNav: boolean;
  /**
   * 命令面板显示
   */
  isShowCommandLinePanel: boolean;
  /**
   * 命令输入框显示
   */
  isShowCommandInput: boolean;
  /**
   * 底部状态栏显示
   */
  isShowFooterStatusBar: boolean;
  /**
   * 左侧抽屉显示
   */
  isShowLeftDrawer: boolean;
  /**
   * 左侧组件, 右侧同理一并说明 所有可以选择组件: DrawingComparison TextSearch EntityAttribute
   */
  leftDrawerComponents: string[];
  /**
   * 右侧抽屉显示
   */
  isShowRightDrawer: boolean;
  rightDrawerComponents: string[];
  /**
   * true图纸加载完成才会渲染加载UI 期间全部用骨架加载代替, UI加载完成时自动变更为false， 默认false 只对关键部分进行骨架加载
   */
  isShowSkeletonLoader: boolean;
  /**
   * 是否优先加载UI
   */
  isPriorityLoadingUi: boolean;
  [k: string]: any;
}
