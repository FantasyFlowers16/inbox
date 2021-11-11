class actions  {
  constructor() {
    this.actionBlock = document.querySelector('.j-action-block')
    this.actionButton = document.querySelector('.j-action-button')
    
  }

  init() {
    this.actionButton.onclick = () => {
      if(this.actionBlock.classList.contains('_open')){
        this.actionBlock.classList.remove('_open')
        this.actionButton .classList.remove('_open')
      }else {
        this.actionBlock.classList.add('_open')
        this.actionButton .classList.add('_open')
      }
    }
  }
}

export default actions
