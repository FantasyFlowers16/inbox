class menu  {
  constructor() {
    this.menuBut = document.querySelector('.j-menu-but')
    this.menu = document.querySelector('.j-menu-mobile')
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

export default menu