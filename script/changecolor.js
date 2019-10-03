import {out} from '/script/out.js';
const greeting = document.querySelector('.greeting');
const colorbutton = document.querySelector('.button-list button');
colorbutton.addEventListener("click", changecolor);
function changecolor(event){
  out(event.target.innerHTML);
  const color = event.target.value;
  out(color);
  greeting.style.setProperty('--main-color', color);
};
