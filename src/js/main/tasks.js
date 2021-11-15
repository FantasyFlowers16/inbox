class tasks  {
  constructor() {
    this.container = document.querySelector('.j-tasks')
    this.button = document.querySelector('.j-tasks-button')
   
  }

  init() {
    this.button.onclick = () => {
      if(this.button.classList.contains('_open')){
        this.button.classList.remove('_open')
        this.container.classList.remove('_open')
      } else {
        this.button .classList.add('_open')
        this.container.classList.add('_open')
      }
    }
   }
}

export default tasks
