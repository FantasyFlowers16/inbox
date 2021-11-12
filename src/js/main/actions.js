class actions  {
  constructor() {
    this.actionBlock = document.querySelector('.j-action-block')
    this.actionButton = document.querySelector('.j-action-button')
    this.container = document.querySelector('.j-main')
    this.moveBut = document.querySelector('.j-move')
    this.moveContainer = document.querySelector('.j-move-container')

    
  }

  init() {
    document.addEventListener('click', e => {
      if(e.target === this.container){
        this.actionBlock.classList.remove('_open')
        this.actionButton .classList.remove('_open')
        this.container .classList.remove('_popup')
        this.moveBut.classList.remove('_open')
        this.moveContainer.classList.remove('_open')
      }
    })
    this.moveBut.onclick = () => {
      if(this.moveBut.classList.contains('_open')){
        this.moveBut.classList.remove('_open')
        this.moveContainer.classList.remove('_open')
      } else {
        this.moveBut .classList.add('_open')
        this.moveContainer.classList.add('_open')
      }
    }
    this.actionButton.onclick = () => {
      if(this.actionBlock.classList.contains('_open')){
        // this.actionBlock.classList.remove('_open')
        // this.actionButton .classList.remove('_open')
        // this.container .classList.remove('_popup')
      }else {
        this.actionBlock.classList.add('_open')
        this.actionButton.classList.add('_open')
        this.container.classList.add('_popup')
      }
    }
  }
}

export default actions
