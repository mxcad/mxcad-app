import "mxcad-app/dist/styles/style.css"
import { MxCADView } from "mxcad-app"
import "./draw"
import { MxFun } from "mxdraw"

// 简单的 JavaScript 代码
function component() {
  const element = document.createElement('div');
  element.innerHTML = '画线';
  element.classList.add('hello'); // 使用 CSS 类
  element.addEventListener('click', ()=> {
    MxFun.sendStringToExecute("Mx_drawLine")

  })
  return element;
}

document.body.appendChild(component());
const mxcadview = new MxCADView()
mxcadview.create()

