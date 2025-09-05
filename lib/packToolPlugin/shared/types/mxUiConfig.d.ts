/**
 * 自定义头部右侧按钮右侧
 */
export interface MxUiConfigHeaderTopBarCustomRightBtnsItem {
  /**
   * 自定义图标
   */
  icon: string;
  /**
   * 命令
   */
  cmd: string;
  /**
   * 提示
   */
  prompt: string;
  /**
   * 打开提示延迟
   */
  openPromptDelay: number;
  [k: string]: any;
}

/**
 * 标题按钮栏数据
 */
export interface MxUiConfigMTitleButtonBarDataItem {
  /**
   * 自定义图标
   */
  icon: string;
  /**
   * 命令
   */
  cmd: string;
  /**
   * 提示
   */
  prompt: string;
  [k: string]: any;
}

/**
 * 顶部按钮栏
 */
export interface MxUiConfigMTopButtonBarDataItem {
  /**
   * 自定义图标
   */
  icon: string;
  /**
   * 提示
   */
  prompt: string;
  /**
   * 命令
   */
  cmd: string;
  [k: string]: any;
}

/**
 * 左侧按钮栏数据
 */
export interface MxUiConfigMLeftButtonBarDataButtonBarDataItem {
  /**
   * 自定义图标
   */
  icon: string;
  /**
   * 提示
   */
  prompt: string;
  /**
   * 命令
   */
  cmd: string;
  [k: string]: any;
}

export interface MxUiConfigMLeftButtonBarData {
  /**
   * 是否显示左侧按钮栏
   */
  isShow: boolean;
  /**
   * 左侧按钮栏数据
   */
  buttonBarData: MxUiConfigMLeftButtonBarDataButtonBarDataItem[];
  [k: string]: any;
}

/**
 * 右侧按钮栏数据
 */
export interface MxUiConfigMRightButtonBarDataButtonBarDataItem {
  /**
   * 自定义图标
   */
  icon: string;
  /**
   * 自定义命令
   */
  cmd: string;
  /**
   * 自定义提示
   */
  prompt: string;
  [k: string]: any;
}

export interface MxUiConfigMRightButtonBarData {
  /**
   * 是否显示右侧按钮栏
   */
  isShow: boolean;
  /**
   * 右侧按钮栏数据
   */
  buttonBarData: MxUiConfigMRightButtonBarDataButtonBarDataItem[];
  [k: string]: any;
}

export interface MxUiConfigMMenuBarDataListItem {
  /**
   * 标签名称
   */
  tab: string;
  /**
   * 自定义图标
   */
  icon: string;
  /**
   * 自定义命令
   */
  cmd: string;
  [k: string]: any;
}

/**
 * 菜单栏数据
 */
export interface MxUiConfigMMenuBarDataItem {
  /**
   * 标签名称
   */
  tab: string;
  /**
   * 当前标签对象是否为响应式数据
   */
  isResponsive?: boolean;
  /**
   * 自定义命令
   */
  cmd?: string;
  /**
   * 自定义图标
   */
  icon?: string;
  /**
   * 菜单项列表
   */
  list: MxUiConfigMMenuBarDataListItem[];
  [k: string]: any;
}

export interface MxUiConfigMRightMenuDataChildrenItem {
  /**
   * 名称
   */
  label: string;
  /**
   * 提示
   */
  tips: string;
  /**
   * 自定义命令
   */
  cmd: string;
  [k: string]: any;
}

/**
 * 右键菜单数据
 */
export interface MxUiConfigMRightMenuDataItem {
  /**
   * 名称
   */
  label: string;
  /**
   * 提示
   */
  tips: string;
  /**
   * 自定义命令
   */
  cmd: string;
  /**
   * 子菜单
   */
  children?: MxUiConfigMRightMenuDataChildrenItem[];
  [k: string]: any;
}

/**
 * 命令运行时右键菜单选项
 */
export interface MxUiConfigMRightMenuDataCommandRuningItem {
  /**
   * 名称
   */
  label: string;
  /**
   * 提示
   */
  tips: string;
  /**
   * 执行操作的选项数字
   */
  execute_operations: number;
  [k: string]: any;
}

/**
 * 命令运行时右键菜单选项-按下Shift 触发OSNAP设置
 */
export interface MxUiConfigMRightMenuDataCommandRuningOsnapSetItem {
  /**
   * 名称
   */
  label: string;
  /**
   * 提示
   */
  tips: string;
  /**
   * OSNAP类型
   */
  set_osnap_type: number;
  [k: string]: any;
}

/**
 * 选择实体右键菜单选项
 */
export interface MxUiConfigMRightMenuDataSelectEntityItem {
  /**
   * 名称
   */
  label: string;
  /**
   * 提示
   */
  tips: string;
  /**
   * 自定义命令
   */
  cmd: string;
  [k: string]: any;
}

export interface MxUiConfig {
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
   * 布尔值false表示不显示, 也可以自行设置网络图片地址
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
   * 默认使用草图与注释UI
   */
  isSketchesAndNotesUiMode: boolean;
  /**
   * 是否显示草图与注释UI
   */
  isShowSketchesAndNotesUiMode: boolean;
  /**
   * 头部右侧按钮标识， 未填写则不显示
   */
  headerTopBarRightBtns: string[];
  /**
   * 默认激活语言
   */
  defaultActiveLanguage: string;
  /**
   * 自定义头部右侧按钮右侧
   */
  headerTopBarCustomRightBtns: MxUiConfigHeaderTopBarCustomRightBtnsItem[];
  /**
   * 是否显示标题按钮栏
   */
  isShowTitleButtonBar: boolean;
  /**
   * 标题按钮栏数据
   */
  mTitleButtonBarData: MxUiConfigMTitleButtonBarDataItem[];
  /**
   * 是否显示顶部按钮栏
   */
  isShowTopButtonBar: boolean;
  /**
   * 顶部按钮栏
   */
  mTopButtonBarData: MxUiConfigMTopButtonBarDataItem[];
  /**
   * 左侧按钮栏
   */
  mLeftButtonBarData: MxUiConfigMLeftButtonBarData;
  /**
   * 右侧按钮栏
   */
  mRightButtonBarData: MxUiConfigMRightButtonBarData;
  /**
   * 是否显示菜单栏
   */
  isShowMenuBar: boolean;
  /**
   * 菜单栏数据
   */
  mMenuBarData: MxUiConfigMMenuBarDataItem[];
  /**
   * 右键菜单数据
   */
  mRightMenuData: MxUiConfigMRightMenuDataItem[];
  /**
   * 命令运行时右键菜单选项
   */
  mRightMenuDataCommandRuning: MxUiConfigMRightMenuDataCommandRuningItem[];
  /**
   * 命令运行时右键菜单选项-按下Shift 触发OSNAP设置
   */
  mRightMenuDataCommandRuningOsnapSet: MxUiConfigMRightMenuDataCommandRuningOsnapSetItem[];
  /**
   * 选择实体右键菜单选项
   */
  mRightMenuDataSelectEntity: MxUiConfigMRightMenuDataSelectEntityItem[];
  /**
   * 是否显示底部界面
   */
  isShowFooter: boolean;
  /**
   * 是否为移动命令行模式
   */
  isMobileCommandLineMode: boolean;
  /**
   * 底部左下角按钮，数组中存在对应的名称才会生成对应的开关按钮 目前支持：栅格、正交、极轴、对象捕捉、对象追踪、DYN、线宽
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
   * 左侧抽屉侧边栏组件 只需要在数组中填写需要显示的组件就可以激活，支持自定义侧边栏查看文档：https://www.mxdraw3d.com/mxcad_docs/zh/7.%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/1.MxCAD%20APP%E5%BA%94%E7%94%A8%E9%9B%86%E6%88%90/2.%E6%89%A9%E5%B1%95%E6%8F%92%E4%BB%B6%E7%9A%84%E5%BC%80%E5%8F%91.html#%E6%B7%BB%E5%8A%A0%E4%BE%A7%E8%BE%B9%E6%A0%8F%E7%BB%84%E4%BB%B6 所有内置可选择的组件有: TextSearch BlockLibrary  EntityAttribute DatabaseDisplay
   */
  leftDrawerComponents: string[];
  /**
   * 右侧抽屉显示
   */
  isShowRightDrawer: boolean;
  /**
   * 右侧抽屉侧边栏组件 只需要在数组中填写需要显示的组件就可以激活，支持自定义侧边栏查看文档：https://www.mxdraw3d.com/mxcad_docs/zh/7.%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/1.MxCAD%20APP%E5%BA%94%E7%94%A8%E9%9B%86%E6%88%90/2.%E6%89%A9%E5%B1%95%E6%8F%92%E4%BB%B6%E7%9A%84%E5%BC%80%E5%8F%91.html#%E6%B7%BB%E5%8A%A0%E4%BE%A7%E8%BE%B9%E6%A0%8F%E7%BB%84%E4%BB%B6
   */
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
