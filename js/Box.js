
export  default  class Box{
  constructor(stepSize) {
    this.defaultSize =  30;
    this.stepSize = stepSize;
    this.createBox = this.createBox.bind(this);

  }

  createBox(){
      const divBoxRef = document.createElement('div');
      this.defaultSize += this.stepSize;
      divBoxRef.style.width = `${this.defaultSize}px`
      divBoxRef.style.height = `${this.defaultSize}px`
      divBoxRef.style.backgroundColor = this.getColor();

      return divBoxRef;
  }



  getColor() {
        return `rgb(${this.setRandomColor() },${this.setRandomColor() },${this.setRandomColor() })`
  }

  setRandomColor() {
        let rand = 0 + Math.random() * (255 + 1 - 0);
        return Math.floor(rand);

  }

}