import {out} from '/script/out.js';
const greeting = document.querySelector('.greeting');
const colorbutton = document.querySelector('.button-list');
colorbutton.addEventListener("click", changecolor);
function changecolor(event){
  out(event.target.tagName);
  if(event.target.tagName != 'BUTTON')return;
  const color = event.target.value;
  out(color);
  greeting.style.setProperty('--main-color', color);
};
