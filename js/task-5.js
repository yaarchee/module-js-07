"use strict";



const nameInputRef = document.querySelector('#name-input');
const nameOutRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input',(event)=>{
  nameOutRef.textContent = event.target.value;
})