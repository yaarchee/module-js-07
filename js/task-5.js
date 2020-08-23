"use strict";



const nameInputRef = document.querySelector('#name-input');
const nameOutRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input',(event)=>{

  event.target.value.length != 0 ? nameOutRef.textContent = event.target.value : nameOutRef.textContent = 'Незнакомец';

})