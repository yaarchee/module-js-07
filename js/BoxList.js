import Box from './Box.js';
export default class BoxList{
    constructor() {
        this.boxList= [];
        this.stepSize = 0;
    }

    makeBoxes(amount){
        for(let i = 0 ; i<amount; i++){
            this.boxList.push(new Box(this.stepSize).createBox())
            this.stepSize +=10;
        }
        return this.boxList;
    }

    deleteBoxes(){
        this.boxList= [];
        this.stepSize = 0;
    }


}