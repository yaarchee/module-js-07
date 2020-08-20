"use strict";

// class Box{
//   constructor() {
//
//   }
// }

const inputRef = document.querySelector('#controls input');
const boxesMainRef = document.querySelector('#boxes')
const controlsRef = document.querySelector('#controls ')

let sizes = 30;

controlsRef.addEventListener('click', handlerCreate);


function handlerCreate(event){
  if(event.target.dataset.action === 'render'){
    if(inputRef.value>0 && inputRef.value<=100) {
      boxesMainRef.append(...createBoxes(inputRef.value))
    }else{
      alert('Число должно быть: min="0" max="100" ');
    }
  }else if(event.target.dataset.action === 'destroy'){
    deleteBox();
  }

}

function deleteBox() {
  console.dir(boxesMainRef.firstElementChild)
  while(boxesMainRef.firstElementChild){
    boxesMainRef.firstElementChild.remove();
  }
  sizes = 30;

}


function createBoxes(amount){

  let tempBoxes = [];


  for(let i = 0 ; i<amount; i++ ){
    const divBoxRef = document.createElement('div');
    divBoxRef.style.width = `${sizes}px`
    divBoxRef.style.height = `${sizes}px`
    divBoxRef.style.backgroundColor = getColor();
    tempBoxes.push(divBoxRef);
    sizes += 10;

  }
  return  tempBoxes;
}

function getColor() {
    return `rgb(${setRandomColor() },${setRandomColor() },${setRandomColor() })`
}

function setRandomColor() {
  let rand = 0 + Math.random() * (255 + 1 - 0);
  return Math.floor(rand);

}
