"use strict";



const galleryRed = document.querySelector('#gallery');
const inputRef = document.querySelector('input');

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const getLiItems = (images)=>{
   return images.map(item=>{
    const itemLiRef = document.createElement('li');
    const imgRef = document.createElement('img');
    imgRef.src = item.url;
    imgRef.alt = item.alt;
    imgRef.style.width = '100px';
    imgRef.style.height = '100px';

    return itemLiRef.appendChild(imgRef);
  })

}

inputRef.addEventListener('change', ()=>{
  let curFiles = inputRef.files;
  console.log(curFiles);
});

// const liItems = images.map(item=>{
//   const itemRef = document.createElement('li');
//   itemRef.insertAdjacentHTML("afterbegin", `<img src="${item.url}" alt='${item.url}' width="100px" height="100px">`);
//
//   return itemRef;
// });

galleryRed.classList.add('js-task3');
galleryRed.append(...getLiItems(images));