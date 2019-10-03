const greeting = document.querySelector('.greeting');
const colorbutton = document.querySelector('.button-list button');
colorbutton.addEventListener("click", changecolor);
function changecolor(event){
  const color = event.target.value;
  elem.style.setProperty('--main-color', color);
};
