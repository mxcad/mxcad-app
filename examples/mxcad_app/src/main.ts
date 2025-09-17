///////////////////////////////////////////////////////////////////////////////
//版权所有（C）2002-2022，成都梦想凯德科技有限公司。
//本软件代码及其文档和相关资料归成都梦想凯德科技有限公司,应用包含本软件的程序必须包括以下版权声明
//此应用程序应与成都梦想凯德科技有限公司达成协议，使用本软件、其文档或相关材料
//https://www.mxdraw.com/
///////////////////////////////////////////////////////////////////////////////
// Components

// 得到注册的所有命令
function isMobileOrTablet() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const isSmallScreen =
    screenWidth <= 768 || (screenWidth <= 1024 && screenHeight <= 768); // 考虑平板设备

  // 检查是否为已知的移动设备
  const isKnownMobile =
    /mobi|android|ios|iphone|ipad|ipod|windows phone|iemobile|blackberry|opera mini|mobile|silk/i.test(
      userAgent
    );

  // 特殊处理高分辨率触屏笔记本/桌面，这里假定这些设备的屏幕尺寸通常较大
  const isLargeTouchDevice =
    isTouch && screenWidth > 1024 && screenHeight > 768;

  // 综合判断
  return (isKnownMobile || (isTouch && isSmallScreen)) && !isLargeTouchDevice;
}
async function fetchServerConfig() {
  try {
    const response = await fetch('ini/myServerConfig.json'); // 可以是相对或绝对路径
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('加载失败:', error);
  }
}
fetchServerConfig().then((serverConfig) => {
  if (serverConfig.isAutomaticJumpToMobilePage && isMobileOrTablet()) {
    if (process.env.NODE_ENV === "production") {
      window.location.href =
        serverConfig.mobilePageUrl ||
        window.location.origin + "/mxcad_mobile/";
    } else {
      console.warn(
        "开发环境不支持跳转到移动端页面, 在mxServerConfig.json配置中配置mobilePageUrl (未配置默认为window.location.origin/mxcad_mobile/) 网络路径在生成环境支持跳转"
      );
    }
  } else {
    import("./runApp").then(({ runApp }) => {
      runApp();
    });
  }
});