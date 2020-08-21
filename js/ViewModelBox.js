export default class ViewModelBox {
    constructor(input, boxesMainRef, boxList) {
        this.handlerCreate = this.handlerCreate.bind(this);
        this.input = input;
        this.boxesMainRef = boxesMainRef;
        this.boxList = boxList;

    }
    handlerCreate(event){
        if(event.target.dataset.action === 'render'){
            this.input.value>0 && this.input.value<=100 ?
                this.boxesMainRef.append(...this.boxList.makeBoxes(this.input.value))
                :
                alert('Число должно быть: min="0" max="100" ');

        }else if(event.target.dataset.action === 'destroy'){
            this.deleteBox();
        }

    }

    deleteBox() {
        while(this.boxesMainRef.firstElementChild){
            this.boxesMainRef.firstElementChild.remove();
        }
        this.boxList.deleteBoxes();
    }
}