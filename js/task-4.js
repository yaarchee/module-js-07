"use strict";


const  countRef = document.querySelector('#value');
const buttonRef = document.querySelector('#counter')

let currentValue = 0;

buttonRef.addEventListener('click', changeValue)


function changeValue(event) {
  if (event.target.dataset.action === "increment"){
    countRef.textContent = ++currentValue;
  }else if(event.target.dataset.action === "decrement"){
    countRef.textContent = --currentValue;
  }
}