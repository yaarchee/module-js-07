"use strict";



const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');


inputRef.addEventListener('input', changeSize);


function changeSize(event) {
  console.log(event.target.value);
  spanRef.style.fontSize = `${event.target.value}px`;
}