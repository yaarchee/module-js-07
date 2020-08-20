"use strict";



const ingRef = document.querySelector('#ingredients');


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


 const liItems = ingredients.map(item=>{
  const itemRef = document.createElement('li');
  itemRef.textContent = item;
  return itemRef;
});


ingRef.append(...liItems);
