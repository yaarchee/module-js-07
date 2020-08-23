"use strict";



const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', checkValidation);





function checkValidation(event) {
  console.log(event.target.value.length)
  if (event.target.value.length < event.target.dataset.length  || event.target.value.length > event.target.dataset.length){
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');

  }else{
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  }
}