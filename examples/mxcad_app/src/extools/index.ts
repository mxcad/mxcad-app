import { init as paramDrawInit} from './pluginDemo/paramdraw';
import { init as textToolsInit } from './editTools/textTools';
import { init as blockToolsInit } from './editTools/blockTools';
import { init as countToolsInit } from './editTools/countTools';
import { init as fitToolsInit } from './editTools/fitTools';
import { init as drawToolsInit } from './editTools/drawTools';
import { init as annotationInit } from './pluginDemo/annotation';
import { init as dataBaseInit } from './pluginDemo/database';
import { init as cadFileInit } from './pluginDemo/cadfile';
import { init as customEntityInit } from './pluginDemo/customEntity';
import { init as codeToolInit } from './code/index';
import { init as otherToolsInit } from './editTools/otherTools';
import { init as viewToolsInit } from './pluginDemo/viewEdit';

export const init = ()=>{
    paramDrawInit();
    textToolsInit();
    blockToolsInit();
    countToolsInit();
    fitToolsInit();
    drawToolsInit();    
    annotationInit();
    dataBaseInit();
    cadFileInit();
    customEntityInit();
    codeToolInit();
    otherToolsInit();
    viewToolsInit();
}