export interface MxServerConfigUploadFileConfigCreateAccept {
  extensions: string;
  mimeTypes: string;
  [k: string]: any;
}

export interface MxServerConfigUploadFileConfigCreate {
  swf: string;
  server: string;
  accept: MxServerConfigUploadFileConfigCreateAccept;
  [k: string]: any;
}

export interface MxServerConfigUploadFileConfig {
  /**
   * 上传服务地址
   */
  baseUrl: string;
  /**
   * 参考WebUploader.create方法传入的参数配置
   */
  create: MxServerConfigUploadFileConfigCreate;
  /**
   * 通过文件的md5参数检查文件是否已经存在
   */
  fileisExist: string;
  /**
   * 用于分片检查是否已经存在
   */
  chunkisExist: string;
  /**
   * 是否分片上传
   */
  chunked: boolean;
  /**
   * 文件上传后前端访问路径
   */
  mxfilepath: string;
  /**
   * 保存文件服务地址
   */
  saveUrl: string;
  /**
   * 保存DWG文件服务地址
   */
  saveDwgUrl: string;
  /**
   * 把指定范围输出到pdf的服务地址
   */
  printPdfUrl: string;
  /**
   * 把指定范围输出到DWG的服务地址
   */
  cutDwgUrl: string;
  [k: string]: any;
}

export interface MxServerConfigAiConfig {
  /**
   * ai服务地址
   */
  aiUrl: string;
  [k: string]: any;
}

export interface MxServerConfigWasmConfig {
  /**
   * :通过指定网络路径加载mxcad库中提供的wasm相关文件, 例如:https://unpkg.com/mxcad/dist/wasm/2d-st/ 程序会自动加载2d-st目录下与wasm相关的文件
   */
  url: string;
  /**
   * 如果没有设置url, 我们可以通过该项目本地存放的assets目录下wasm相关的文件， 目前可选项有: 2d和2d-st 2d是多线程加载，可能需要一些额外的服务器配置， 而2d-st是单线程的，你可以很方便的使用它,也可以通过访问地址参数调置http://xxxx/mxcad/?wasmtype=st
   */
  type: string;
  [k: string]: any;
}

/**
 * 需要加载的TrueType字体 [['simsun', 'syadobe'], ['思原宋体', '思原黑体'], ['stadobe.otf', 'syadobe.otf']]
 */
export interface MxServerConfigTrueTypeFontItem {
  0: string;
  [k: string]: any;
}

export interface MxServerConfig {
  /**
   * 上传文件相关配置
   */
  uploadFileConfig: MxServerConfigUploadFileConfig;
  aiConfig: MxServerConfigAiConfig;
  /**
   * 在本项目中使用了mxcad库中提供的WebAssembly wasm文件和相关胶水代码的相关配置
   */
  wasmConfig: MxServerConfigWasmConfig;
  /**
   * 是否启用truetype字体的支持,默认是启用
   */
  supportTruetypeFont: boolean;
  /**
   * 是使用webgl 1.0程序
   */
  webgl1: boolean;
  /**
   * 缺省使用的shx字体
   */
  defaultFont: string;
  defaultBigFont: string;
  defaultTrueTypeFont: string;
  /**
   * 需要加载的shx字体
   */
  font: string[];
  /**
   * 需要加载的big shx字体
   */
  bigFont: string[];
  /**
   * 需要加载的TrueType字体 [['simsun', 'syadobe'], ['思原宋体', '思原黑体'], ['stadobe.otf', 'syadobe.otf']]
   */
  trueTypeFont: MxServerConfigTrueTypeFontItem[];
  /**
   * 是否自动跳转到移动端页面
   */
  isAutomaticJumpToMobilePage: boolean;
  /**
   * 跳转的移动端页面的网络路径如/mxcad_mobile/或者https://xxx.com/mxcad_mobile
   */
  mobilePageUrl: string;
  /**
   * cad文件格式的扩展名
   */
  file_ext_name: string;
  /**
   * 使用Utf8编码
   */
  useUtf8: boolean;
  [k: string]: any;
}
