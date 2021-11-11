class search  {
  constructor() {
    this.menuBut = document.querySelector('.j-search-but')
    this.input = document.querySelector('.j-search-input')
  }


  init() {
    this.menuBut.onclick = () => {
      if (this.menuBut.classList.contains('_active')) {
        this.menuBut.classList.remove('_active')
        this.input.classList.remove('_open')
      }else {
        this.menuBut.classList.add('_active')
        this.input.classList.add('_open')
      }
    }
  }
}

export default search