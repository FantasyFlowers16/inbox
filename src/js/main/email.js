class email  {
  constructor() {
    this.fav = document.querySelector('.j-fav')
  }


  init() {
    this.fav.onclick = () => {
      if (this.fav.classList.contains('_active')) {
        this.fav.classList.remove('_active')
      }else {
        this.fav.classList.add('_active')
      }
    }
  }
}

export default email