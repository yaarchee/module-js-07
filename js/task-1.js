"use strict";




const categoriesMainRef  = document.querySelector('#categories');
const itemsRed = document.querySelectorAll('.item');

console.log(`В корневом списке ${categoriesMainRef.children.length} категории`);

itemsRed.forEach(item =>{
  console.log(`В категории 
  ${item.querySelector('h2').textContent} 
  находится 
  ${item.querySelectorAll('li').length} 
  элемента`);
});

