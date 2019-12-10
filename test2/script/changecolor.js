import {out} from '/test2/script/out.js';
let greeting = document.querySelector('.greeting');
let colorbutton = document.querySelector('.button-list');
colorbutton.addEventListener("click", changecolor);
function changecolor(event){
  out(event.target.tagName);
  if(event.target.tagName != 'BUTTON')return;
  const color = event.target.value;
  out(color);
  greeting.style.setProperty('--main-color', color);
};
