import BoxList from './BoxList.js';
import ViewModelBox from './ViewModelBox.js';



const inputRef = document.querySelector('#controls1 input');
const boxesMainRef = document.querySelector('#boxes1')
const controlsRef = document.querySelector('#controls1 ')

const boxList = new BoxList();
const viewModelBox = new ViewModelBox(inputRef, boxesMainRef, boxList);


controlsRef.addEventListener('click', viewModelBox.handlerCreate);






