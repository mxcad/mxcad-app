///////////////////////////////////////////////////////////////////////////////
//版权所有（C）2002-2022，成都梦想凯德科技有限公司。
//本软件代码及其文档和相关资料归成都梦想凯德科技有限公司,应用包含本软件的程序必须包括以下版权声明
//此应用程序应与成都梦想凯德科技有限公司达成协议，使用本软件、其文档或相关材料
//https://www.mxdraw.com/
///////////////////////////////////////////////////////////////////////////////
import { DynamicInputType, MxFun } from "mxdraw";
import { ColorIndexType, McCmColor, McDbPolyline, McGePoint3d, MxCADUiPrPoint, MxCADUtility, MxCanvas2Image, MxCpp, MxModifyColor, MxTools } from "mxcad";
import { getMxCADUi } from "../../components/index";

export async function Mx_Export_DWG() {
  let {
    baseUrl = "",
    saveDwgUrl = "",
    mxfilepath = ""
  } = getMxCADUi().getUploadFileConfig();
  // 把mxweb文件 ，保存到服务器上，然后转换成 dwg文件 ，再下载。
  MxCpp.getCurrentMxCAD().saveFileToUrl(saveDwgUrl, (iResult: number, sserverResult: string) => {
    try {
      let ret = JSON.parse(sserverResult);
      if (ret.ret == "ok") {
        let filePath = baseUrl + mxfilepath + ret.file;
        fetch(filePath).then(async (res) => {
          const blob = await res.blob()
          MxTools.saveAsFileDialog({
            blob,
            filename: ret.file,
            types: [{
              description: "dwg图纸",
              accept: {
                "application/octet-stream": [".dwg"],
              },
            }]
          })
        })
      }
      else {
        console.log(sserverResult);
      }
    } catch {
      console.log("Mx: sserverResult error");
    }
  });
}

export async function Mx_Export_MxWeb() {
  let {
    baseUrl = "",
    mxfilepath = "",
    saveUrl = ""
  } = getMxCADUi().getUploadFileConfig();

  // 把mxweb文件 ，保存到服务器上，再下载。
  MxCpp.getCurrentMxCAD().saveFileToUrl(saveUrl, (iResult: number, sserverResult: string) => {
    try {
      let ret = JSON.parse(sserverResult);
      if (ret.ret == "ok") {
        let filePath = baseUrl + mxfilepath + ret.file;
        MxTools.downloadFileFromUrl(filePath, ret.file);
      }
      else {
        console.log(sserverResult);
      }
    } catch {
      console.log("Mx: sserverResult error");
    }
  });
}


// 直接打开个网上的mxweb文件。
export async function Mx_Open_MxWeb() {
  MxCpp.getCurrentMxCAD().openWebFile("http://localhost:1337/mxcad/file/8c79da20e232495888dbb0da17459399.mxweb");
}


export async function MxTest_NewFile() {
  let mxcad = MxCpp.getCurrentMxCAD();
  mxcad.newFile();
}

// 指定范围输出pdf
export async function Mx_Export_Pdf() {

  // 选择范围.
  let getPoint = new MxCADUiPrPoint();
  getPoint.setMessage("指定输出范围第一点:");
  let pt1 = await getPoint.go();
  if (!pt1) return;

  getPoint.setMessage("指定输出范围第二点:");
  getPoint.setUserDraw((currentPoint: McGePoint3d, worldDraw) => {
    worldDraw.setColor(0xFF0000);
    let pl = new McDbPolyline();
    pl.addVertexAt(pt1);
    pl.addVertexAt(new McGePoint3d(pt1.x, currentPoint.y))
    pl.addVertexAt(currentPoint);
    pl.addVertexAt(new McGePoint3d(currentPoint.x, pt1.y))
    pl.constantWidth = MxFun.screenCoordLong2Doc(2);
    pl.isClosed = true;

    worldDraw.drawMcDbEntity(pl);

    let points: THREE.Vector3[] = [];
    points.push(pt1.toVector3());
    points.push(new THREE.Vector3(pt1.x, currentPoint.y));
    points.push(currentPoint.toVector3());
    points.push(new THREE.Vector3(currentPoint.x, pt1.y))

    worldDraw.setColor(0x003244);
    worldDraw.drawSolid(points, 0.5)

  });

  getPoint.setDisableOsnap(true);
  getPoint.setDisableOrthoTrace(true);
  getPoint.setDynamicInputType(DynamicInputType.kXYCoordInput);
  let pt2 = await getPoint.go();
  if (!pt2) {
    return;
  }

  let {
    baseUrl = "",
    mxfilepath = "",
    printPdfUrl = ""
  } = getMxCADUi().getUploadFileConfig();

  console.log(getMxCADUi().getUploadFileConfig());
  let param = {
    width: "2100",// 图纸长
    height: "2970",// 图纸宽
    bd_pt1_x: "" + pt1.x, // 角点1x
    bd_pt1_y: "" + pt1.y, // 角点1y
    bd_pt2_x: "" + pt2.x, // 角点2x
    bd_pt2_y: "" + pt2.y // 角点2y
  };

  // 把mxweb文件 ，保存到服务器上,再转成pdf。
  MxCpp.getCurrentMxCAD().saveFileToUrl(printPdfUrl, (iResult: number, sserverResult: string) => {
    try {
      let ret = JSON.parse(sserverResult);
      if (ret.ret == "ok") {
        let filePath = baseUrl + mxfilepath + ret.file;
        MxTools.downloadFileFromUrl(filePath, ret.file);
      }
      else {
        console.log(sserverResult);
      }
    } catch {
      console.log("Mx: sserverResult error");
    }
  }, undefined, JSON.stringify(param));

}




// 指定范围输出Dwg
export async function Mx_Cut_Dwg() {

  // 选择范围.
  let getPoint = new MxCADUiPrPoint();
  getPoint.setMessage("指定输出范围第一点:");
  let pt1 = await getPoint.go();
  if (!pt1) return;

  getPoint.setMessage("指定输出范围第二点:");
  getPoint.setUserDraw((currentPoint: McGePoint3d, worldDraw) => {
    worldDraw.setColor(0xFF0000);
    let pl = new McDbPolyline();
    pl.addVertexAt(pt1);
    pl.addVertexAt(new McGePoint3d(pt1.x, currentPoint.y))
    pl.addVertexAt(currentPoint);
    pl.addVertexAt(new McGePoint3d(currentPoint.x, pt1.y))
    pl.constantWidth = MxFun.screenCoordLong2Doc(2);
    pl.isClosed = true;

    worldDraw.drawMcDbEntity(pl);

    let points: THREE.Vector3[] = [];
    points.push(pt1.toVector3());
    points.push(new THREE.Vector3(pt1.x, currentPoint.y));
    points.push(currentPoint.toVector3());
    points.push(new THREE.Vector3(currentPoint.x, pt1.y))

    worldDraw.setColor(0x003244);
    worldDraw.drawSolid(points, 0.5)

  });

  getPoint.setDisableOsnap(true);
  getPoint.setDisableOrthoTrace(true);
  getPoint.setDynamicInputType(DynamicInputType.kXYCoordInput);
  let pt2 = await getPoint.go();
  if (!pt2) {
    return;
  }

  let {
    baseUrl = "",
    mxfilepath = "",
    cutDwgUrl = ""
  } = getMxCADUi().getUploadFileConfig();

  console.log(getMxCADUi().getUploadFileConfig());
  let param = {
    bd_pt1_x: "" + pt1.x,
    bd_pt1_y: "" + pt1.y,
    bd_pt2_x: "" + pt2.x,
    bd_pt2_y: "" + pt2.y
  };

  // 把mxweb文件 ，保存到服务器上,再转成dwg。
  MxCpp.getCurrentMxCAD().saveFileToUrl(cutDwgUrl, (iResult: number, sserverResult: string) => {
    try {
      let ret = JSON.parse(sserverResult);
      if (ret.ret == "ok") {
        let filePath = baseUrl + mxfilepath + ret.file;
        MxTools.downloadFileFromUrl(filePath, ret.file);
      }
      else {
        console.log(sserverResult);
      }
    } catch {
      console.log("Mx: sserverResult error");
    }
  }, undefined, JSON.stringify(param));

}





export function getHostUrl(): string {
  let host = window.location.hostname;
  if (host.substring(0, 4) != "http") {
    host = document.location.protocol + "//" + host;
  }
  return host;
}


function getFullPath() {
  return window.location.origin + window.location.pathname;
}

function openNewWindow(url) {
  const newWindow = window.open(url, '_blank');
  // 如果浏览器拦截弹窗，newWindow 可能为 null
  if (!newWindow) {
    console.error('弹窗被浏览器拦截');
  }
}


// 指定范围输出MxWeb
export async function Mx_Cut_MxWeb() {

  // 选择范围.
  let getPoint = new MxCADUiPrPoint();
  getPoint.setMessage("指定输出范围第一点:");
  let pt1 = await getPoint.go();
  if (!pt1) return;

  getPoint.setMessage("指定输出范围第二点:");
  getPoint.setUserDraw((currentPoint: McGePoint3d, worldDraw) => {
    worldDraw.setColor(0xFF0000);
    let pl = new McDbPolyline();
    pl.addVertexAt(pt1);
    pl.addVertexAt(new McGePoint3d(pt1.x, currentPoint.y))
    pl.addVertexAt(currentPoint);
    pl.addVertexAt(new McGePoint3d(currentPoint.x, pt1.y))
    pl.constantWidth = MxFun.screenCoordLong2Doc(2);
    pl.isClosed = true;

    worldDraw.drawMcDbEntity(pl);

    let points: THREE.Vector3[] = [];
    points.push(pt1.toVector3());
    points.push(new THREE.Vector3(pt1.x, currentPoint.y));
    points.push(currentPoint.toVector3());
    points.push(new THREE.Vector3(currentPoint.x, pt1.y))

    worldDraw.setColor(0x003244);
    worldDraw.drawSolid(points, 0.5)

  });

  getPoint.setDisableOsnap(true);
  getPoint.setDisableOrthoTrace(true);
  getPoint.setDynamicInputType(DynamicInputType.kXYCoordInput);
  let pt2 = await getPoint.go();
  if (!pt2) {
    return;
  }


  let cutMxWebUrl = getHostUrl() + ":1337/mxcad/cut_mxweb";

  let {
    baseUrl = "",
    mxfilepath = ""
  } = getMxCADUi().getUploadFileConfig();

  console.log(getMxCADUi().getUploadFileConfig());
  let param = {
    bd_pt1_x: "" + pt1.x,
    bd_pt1_y: "" + pt1.y,
    bd_pt2_x: "" + pt2.x,
    bd_pt2_y: "" + pt2.y
  };

  // 把mxweb文件 ，保存到服务器上,生成剪切后的mxweb文件。
  MxCpp.getCurrentMxCAD().saveFileToUrl(cutMxWebUrl, (iResult: number, sserverResult: string) => {
    try {
      let ret = JSON.parse(sserverResult);
      if (ret.ret == "ok") {
        let filePath = baseUrl + mxfilepath + ret.file;

        openNewWindow(getFullPath() + "?file=" + filePath);

      }
      else {
        console.log(sserverResult);
      }
    } catch {
      console.log("Mx: sserverResult error");
    }
  }, undefined, JSON.stringify(param));

}

// 屏幕截图jpg
// 1. 保存当前地图状态
function saveMapState(map) {
    return {
        center: map.getCenter(), // LngLat { lng, lat }
        zoom: map.getZoom(),
        pitch: map.getPitch(),   // 倾斜角度
        bearing: map.getBearing(), // 旋转角度
        // 注意：如果使用了 padding 或 transition，可能还需要保存这些
    };
}

// 2. 设置到指定边界（例如某个区域）
function flyToBounds(map, bounds) {
    // bounds 格式：[[minLng, minLat], [maxLng, maxLat]]
    map.fitBounds(bounds, {
        padding: 40,        // 可选：内边距
        maxZoom: 15,        // 可选：限制最大缩放级别
        duration: 0,     // 动画时长
        // easing: ...       // 可选缓动函数
    });
}
// 3. 恢复到之前保存的状态
function restoreMapState(map, savedState) {
    if (!savedState) return;

    map.flyTo({
        center: savedState.center,
        zoom: savedState.zoom,
        pitch: savedState.pitch,
        bearing: savedState.bearing,
        duration: 0,
    });
}
async function Mx_ScreenToJpg() {

    let mxcad = MxCpp.getCurrentMxCAD();
    const isMap = mxcad.mxdraw.isMapBox()
    const ret = await MxCADUtility.getCorner("选择截图范围", undefined, undefined, false, true);
    if (!ret) return;


    let w = Math.abs(ret.pt1.x - ret.pt2.x);
    let h = Math.abs(ret.pt1.y - ret.pt2.y);

    if (w < 1 || h < 1) return;

    let jpg_width = 200;
    let jpg_height = jpg_width * h / w;
    let data
    if (isMap) {
        const { mxmap } = getMxCADUi()
        data = saveMapState(mxmap.getMapbox())

        flyToBounds(mxmap.getMapbox(), [mxmap.cadTolnglat(ret.pt1.toVector3()), mxmap.cadTolnglat(ret.pt2.toVector3())])
    }

    mxcad.mxdraw.createCanvasImageData(
        (imageData: String) => {
            if (isMap) {
                const { mxmap } = getMxCADUi()
                restoreMapState(mxmap.getMapbox(), data)
            }
            let newWindow: any = window.open();


            if (newWindow != null) {
                newWindow.document.write('<img src="' + imageData + '"/>');
            }
        },
        {
            width: jpg_width, // 图片宽
            height: jpg_height, // 图片高
            range_pt1: ret.pt1.toVector3(), // 截图范围角点1
            range_pt2: ret.pt2.toVector3(), // 截图范围角点2
        }
    );



}

// 屏幕截图bmp
async function Mx_ScreenToBmp() {
  let mxcad = MxCpp.getCurrentMxCAD();

  if (mxcad.mxdraw.isMapBox()) {

    // mapbox只支持全屏截图。
    let saveFile = true;

    mxcad.setAttribute({ ShowCoordinate: false });

    mxcad.mxdraw.createCanvasImageData(
      (_imageData: String) => {

        mxcad.setAttribute({ ShowCoordinate: true });


        let newWindow: any = window.open();
        if (newWindow != null) {
          let canvas2image = new MxCanvas2Image(newWindow.document);
          if (saveFile) {
            canvas2image.saveAsImage(mxcad.mxdraw.getCanvas(), undefined, undefined, "bmp");
          }
          else {
            // 获取浏览器内部宽度
            //const browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            //let zoom = window.outerWidth / browserWidth;
            let zoom = window.devicePixelRatio;
            let img = canvas2image.convertToImage(mxcad.mxdraw.getCanvas(), undefined, undefined, "bmp");
            img.width = mxcad.mxdraw.getCanvas().width / zoom;
            img.height = mxcad.mxdraw.getCanvas().height / zoom;
            newWindow.document.body.appendChild(img);
          }

          //
        }
      }
    );

  }
  else {
    const ret = await MxCADUtility.getCorner("选择截图范围", undefined, undefined, false, true);
    if (!ret) return;


    let w = Math.abs(ret.pt1.x - ret.pt2.x);
    let h = Math.abs(ret.pt1.y - ret.pt2.y);

    if (w < 1 || h < 1) return;
    /*
        let bmp_width = mxcad.mxdraw.cadCoordLong2View(w);
        let bmp_height = mxcad.mxdraw.cadCoordLong2View(h);
        */

    let bmp_width = 1000;
    let bmp_height = bmp_width * h / w;

    let saveFile = true;
    let bakViewColor = mxcad.getViewBackgroundColor();
    mxcad.setViewBackgroundColor(0xFFFFFF);

    mxcad.setAttribute({ ShowCoordinate: false });

    let modify = new MxModifyColor();
    let color = new McCmColor();
    color.setColorIndex(ColorIndexType.kWhite);
    modify.Do(MxCpp.getCurrentDatabase(), color);

    mxcad.mxdraw.createCanvasImageData(
      (_imageData: String) => {
        mxcad.setViewBackgroundColor(bakViewColor);
        mxcad.setAttribute({ ShowCoordinate: true });
        modify.DoRestore();

        let newWindow: any = window.open();
        if (newWindow != null) {
          let canvas2image = new MxCanvas2Image(newWindow.document);
          if (saveFile) {
            canvas2image.saveAsImage(mxcad.mxdraw.getCanvas(), undefined, undefined, "bmp");
          }
          else {
            // 获取浏览器内部宽度
            //const browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            //let zoom = window.outerWidth / browserWidth;
            let zoom = window.devicePixelRatio;
            let img = canvas2image.convertToImage(mxcad.mxdraw.getCanvas(), undefined, undefined, "bmp");
            img.width = mxcad.mxdraw.getCanvas().width / zoom;
            img.height = mxcad.mxdraw.getCanvas().height / zoom;
            newWindow.document.body.appendChild(img);
          }

          //
        }
      },
      {
        type: "image/bmp",
        width: bmp_width, // 图片宽
        height: bmp_height, // 图片高
        range_pt1: ret.pt1.toVector3(), // 截图范围角点1
        range_pt2: ret.pt2.toVector3(), // 截图范围角点2
      }
    );
  }
}

export function init() {
  MxFun.addCommand("Mx_Export_DWG_test", Mx_Export_DWG);
  MxFun.addCommand("Mx_Export_MxWeb", Mx_Export_MxWeb);
  MxFun.addCommand("Mx_Open_MxWeb", Mx_Open_MxWeb);
  MxFun.addCommand("MxTest_NewFile", MxTest_NewFile);
  MxFun.addCommand("Mx_Export_Pdf", Mx_Export_Pdf);
  MxFun.addCommand("Mx_Cut_Dwg", Mx_Cut_Dwg);
  MxFun.addCommand("Mx_Cut_MxWeb", Mx_Cut_MxWeb);
  MxFun.addCommand("Mx_ScreenToJpg", Mx_ScreenToJpg);
  MxFun.addCommand("Mx_ScreenToBmp", Mx_ScreenToBmp);
}
