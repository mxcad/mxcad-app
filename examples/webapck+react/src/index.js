import React from 'react';
import ReactDOM from 'react-dom/client';
import { mxcadApp, MxCADView } from "mxcad-app"
import "mxcad-app/style"
import { MxFun } from "mxdraw"
import "./draw/index";


ReactDOM.createRoot(document.getElementById('root')).render(<button onClick={()=> MxFun.sendStringToExecute('Mx_drawLine')}>画线</button>);
new MxCADView().create()
