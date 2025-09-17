import { MxFun } from 'mxdraw';
import { Mx_drawBarCode, McDbTestBarCode } from './barcodes/drawBarCode';
import { Mx_drawQrCode, McDbTestQrCode } from './qrCode/drawQrCode'

export function init(){
    
    new McDbTestBarCode().rxInit();
    new McDbTestQrCode().rxInit();
    MxFun.addCommand('Mx_TestDrawBarCode', Mx_drawBarCode);
    MxFun.addCommand('Mx_TestdrawQrCode', Mx_drawQrCode);
}