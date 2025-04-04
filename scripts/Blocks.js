class Blocks {
    selectors = {
      block: '.block',
      prevButton: '#prev',
      nextButton: '#next',
    };
  
    constructor() {
      this.blocks = document.querySelectorAll(this.selectors.block);
      this.prevButton = document.getElementById(this.selectors.prevButton.substring(1));
      this.nextButton = document.getElementById(this.selectors.nextButton.substring(1));
      this.currentIndex = 0;
  
      if (this.isLaptopView()) {
        this.bindEvents();
        this.showBlock(this.currentIndex); 
      }
    }
  
    isLaptopView() {
      return window.matchMedia('(min-width: 1024px)').matches;
    }
  
    showBlock(index) {
      this.blocks.forEach((block, i) => {
        block.classList.toggle('active', i === index);
      });
    }
  
    onPrevButtonClick = () => {
      this.currentIndex = (this.currentIndex - 1 + this.blocks.length) % this.blocks.length;
      this.showBlock(this.currentIndex);
    }
  
    onNextButtonClick = () => {
      this.currentIndex = (this.currentIndex + 1) % this.blocks.length;
      this.showBlock(this.currentIndex);
    }
  
    bindEvents() {
      this.prevButton.addEventListener('click', this.onPrevButtonClick);
      this.nextButton.addEventListener('click', this.onNextButtonClick);
    }
  }
  
  export default Blocks;
  