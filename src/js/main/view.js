class view  {
  constructor() {
    this.menuBut = document.querySelector('.j-view-but')
    this.menu = document.querySelector('.j-view')
  }


  init() {
    this.menuBut.onclick = () => {
      if (this.menuBut.classList.contains('_open')) {
        this.menuBut.classList.remove('_open')
        this.menu.classList.remove('_open')

      }else {
        this.menuBut.classList.add('_open')
        this.menu.classList.add('_open')
      }
    }
  }
}

export default view