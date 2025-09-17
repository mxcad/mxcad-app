// 导入MxCAD应用相关模块
import { mxcadApp, MxCADView } from "mxcad-app";
// 导入MxCAD核心功能和实体类
import { MxCpp, McGePoint3d, McDbLine, McCmColor, McObject, MxMap, MxCADPluginBase, MxCADUiPrPoint, MxCADUI, McObjectId, MxPropertiesWindowCustomValueType, McDbAttribute, McDbBlockReference, McDbCustomEntity, McDbEntity, McDbText } from "mxcad";
// 导入MxDraw核心功能
import { MxDbRectBoxLeadComment, MxFun } from "mxdraw"
import { getMapDefaultData, init as gisinit, MxTest_Map_Download } from "@/gis/init";
import { init as gis_entity_init } from "@/gis/gis_entity";
import { init as extools_init } from "@/extools/index";
import { useModalVisible } from "../components/Modal/hooks";

mxcadApp.initConfig({
    uiConfig: "ini/myUiConfig.json", sketchesUiConfig: "ini/mySketchesAndNotesUiConfig.json",
    serverConfig: "ini/myServerConfig.json", quickCommandConfig: "ini/myQuickCommand.json", themeConfig: "ini/myVuetifyThemeConfig.json"
})

function decodeParams(params: Record<string, string>): Record<string, any> {
    const decodedParams: Record<string, any> = {};
    for (const key in params) {
      decodedParams[decodeURIComponent(key)] = decodeURIComponent(params[key]);
    }
    return decodedParams;
  }

  
/** 解析参数字符串并返回参数对象 */
export function parseParamString(paramString: string): Record<string, any> {
    const params: Record<string, any> = {};
    const paramPairs = paramString.split("&");
    for (let i = 0; i < paramPairs.length; i++) {
      const pair = paramPairs[i].split("=");
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return params;
  }

export function getParamsFromUrl(): Record<string, any> {
    let params: Record<string, any> = {};
    const url = window.location.href;
    const questionMarkIndex = url.indexOf("?");
    if (questionMarkIndex !== -1) {
      const paramString = url.substring(questionMarkIndex + 1);
      params = decodeParams(parseParamString(paramString));
    }
    return params;
  }

// 画线命令
export async function Mx_drawLine() {
    console.log(window["SharedArrayBuffer"]);
    // 获取线段起点
    let getFristPoint = new MxCADUiPrPoint();
    getFristPoint.setMessage("请点击确定起始点");
    let fristPoint: any = await getFristPoint.go();
    if (!fristPoint) return

    // 获取线段终点
    let getSecondPoint = new MxCADUiPrPoint();
    getSecondPoint.setMessage("请点击确定终点");
    getSecondPoint.setUserDraw((pt, pw) => {
        let line = new McDbLine(fristPoint.x, fristPoint.y, fristPoint.z, pt.x, pt.y, pt.z);
        pw.drawMcDbEntity(line)
    })
    let secondPoint: any = await getSecondPoint.go();
    if (!secondPoint) return

    // 绘制线段
    let line = new McDbLine(fristPoint.x, fristPoint.y, fristPoint.z, secondPoint.x, secondPoint.y, secondPoint.z);
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.drawEntity(line)
};
let { map } = getParamsFromUrl()

const isMap = (map === "true") || (map === true)

let mxcadview:MxCADView = isMap ? new MxCADView({openFile:"road.dwg.mxweb",map:true}) : new MxCADView({ openFile: new URL("test2.mxweb", mxcadApp.getStaticAssetPath()).href });

let mxcad: McObject = mxcadview.mxcad;

mxcad.on("init", () => {
    console.log("mx:init");
    // 注册所有命令
    MxFun.addCommand("Mx_drawLine", Mx_drawLine);

    // 注册GIS相关命令
    gis_entity_init();

    // 注册地图下载命令
    MxFun.addCommand("MxTest_Map_Download", MxTest_Map_Download);
})

mxcad.on("init_before_mxdraw", () => {
    console.log("mx:init_before_mxdraw");
});


mxcad.on("init_mxcad", () => {
    console.log("mx:init_mxcad");
    extools_init();
    init()
});

mxcad.on("init_map", (init_param: { map: MxMap, plugin: MxCADPluginBase }) => {
    init_param.plugin.map_default_data = getMapDefaultData();
    console.log(init_param);
    console.log("mx:init_map");
});

mxcad.on("map_style.load", (map: MxMap) => {
    gisinit(map);
    console.log(map);
    console.log("mx:map_style.load");
});


mxcad.on("openFileComplete", () => {
    console.log("mx:openFileComplete");
});
let mxcadui: MxCADUI;
// cad应用加载开始
MxFun.on("mxcadApplicationStart", (mxcaduiimp: MxCADUI) => {
    mxcadui = mxcaduiimp;
    mxcadui.init(new MxCADPluginBase());
});

function loadFonts(vecShxFonts: string[], vecBigShxFonts: string[], vecTureTypeFonts: string[]){
    return new Promise<boolean>((res, rej) => {
        MxCpp.App.loadFonts(vecShxFonts, vecBigShxFonts, vecTureTypeFonts, () => {
            res(true);
        });
    });
}

// MxCAD创建成功，mxcad.on("init_mxcad")
MxFun.on("mxcadApplicationCreatedMxCADObject", async (param) => {

    let config = mxcadui.getServerConfig();
    MxCpp.App.addNetworkLoadingFont(config.font || ["txt.shx", "simplex.shx", "gdt.shx", "aaa.shx", "ltypeshp.shx", "complex.shx"]);
    MxCpp.App.addNetworkLoadingBigFont(config.bigFont || ["hztxt.shx", "gbcbig.shx"])
    if (config.trueTypeFont) {
        MxCpp.App.addNetworkLoadingTrueTypeFont(config.trueTypeFont[0], config.trueTypeFont[1], config.trueTypeFont[2]);
    }
    else {
        MxCpp.App.addNetworkLoadingTrueTypeFont(["syadobe"], ["思原黑体"], ["syadobe.otf"]);
    }

    MxCpp.App.addNetworkLoadingTrueTypeFont([ "CXGDT"], ["CXGDT"], [ "CXGDT.ttf"]);

    // 现在就从服务器，把gdt.shx加载内存中。
    await loadFonts(["gdt.shx"],[],["CXGDT.ttf"]);



    let mxcad: McObject = param.mxcad;
    // 设置圆弧的显示精度，0~999
    mxcad.setAttribute({ DisplayPrecision: 35 });

    // 对象选择事件
    mxcad.on("selectChange", (ids: McObjectId[]) => {
        console.log("selectChange");
        if (ids.length == 0) return;
        let id = ids[0];
        let mxent = id.getMxDbEntity();
        if (mxent !== null) {
            console.log(mxent.getTypeName());
            if (mxent instanceof MxDbRectBoxLeadComment) {
                let comment: MxDbRectBoxLeadComment = mxent;
                console.log(comment.text);
                //comment.text = "xxxx";
                //comment.setNeedUpdateDisplay();
            }
            //...
            return;
        }
        let ent = id.getMcDbEntity();
        if (ent !== null) {
            console.log(ent.objectName);
            if (ent instanceof McDbText) {
                let text: McDbText = ent;
                console.log(text.textString);
            }
            else if (ent instanceof McDbBlockReference) {
                let blkRef: McDbBlockReference = ent;
                let aryId = blkRef.getAllAttribute();
                aryId.forEach((id) => {
                    let attribt: McDbAttribute = id.getMcDbEntity() as any;
                    console.log(attribt.textString);
                    console.log(attribt.tag);
                })
            }
            //...
        }
    });

    // 属性界面上，得到对象属性事件。
    MxCpp.PropertiesWindow.onEvent_getProperties((id: McObjectId) => {
        let ent = id.getMcDbEntity();
        if (!ent) return [];
        let dn = ent.getxDataDouble("DN");
        let len = ent.getxDataDouble("LEN");
        let ret = [];

        if (dn.ret) {
            ret.push({
                sVarName: "DN",
                iVarType: MxPropertiesWindowCustomValueType.kDouble,
                val: dn.val,
                isOnlyRead: false
            });
        }

        if (len.ret) {
            ret.push({
                sVarName: "LEN",
                iVarType: MxPropertiesWindowCustomValueType.kDouble,
                val: len.val,
                isOnlyRead: false
            });
        }
        return ret;
    })

    // 属性界面上，对象属性被修改事件。
    MxCpp.PropertiesWindow.onEvent_setProperties((id: McObjectId, prop: any) => {
        let ent = id.getMcDbEntity();
        if (!ent) return;
        if (prop.sVarName == "DN") {
            ent.setxDataDouble("DN", prop.val);
        }
        else if (prop.sVarName == "LEN") {
            ent.setxDataDouble("LEN", prop.val);
        }
    });
});

export function getMxCADUi(): MxCADUI {
    return mxcadui;
}

const { showModal, hideModal, showTools } = useModalVisible()
async function My_PluginTest() {
    showModal({
        title: "My Test Draw",
        text: "测试Modal",
        oncancel: () => {
            // 取消
            hideModal()
        },
        onsubmit: () => {
            // 确定
            hideModal()
        },
        ongetallentity: () => {
            // 确定
            hideModal()
            MxFun.sendStringToExecute("TestGetAllEntity")
        },
        ondrawline: () => {
            // 确定
            hideModal()
            MxFun.sendStringToExecute("Mx_Circle")
        },
        docommand: (cmd) => {
            hideModal()
            MxFun.sendStringToExecute(cmd)
        }
    })
}
async function My_Extool() {
    showTools({
        title: "My Extension Tools",
        text: "扩展工具",
        oncancel: () => {
            // 取消
            hideModal()
        },
        docommand: (cmd) => {
            hideModal()
            MxFun.sendStringToExecute(cmd)
        }
    })
};

function init() {
    MxFun.addCommand("My_PluginTest", My_PluginTest);
    MxFun.addCommand("My_Extool", My_Extool);
}

export default mxcadview;