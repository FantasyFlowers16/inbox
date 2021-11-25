class options  {
  constructor() {
    this.button = document.querySelector('.j-menu-but')
    this.container = document.querySelector('.j-menu-mobile')
    this.header = document.querySelector('.j-header')
    this.menuDesktop =  document.querySelector('.j-menu-desktop')
  }


  init() {
    let scrollWidth = this.menuDesktop.offsetWidth - this.menuDesktop.clientWidth;
    console.log(scrollWidth)
    this.container.style.setProperty('--scroll-width', scrollWidth + 'px')
    this.button.onclick = () => {
      if (this.button.classList.contains('_open')) {
        this.button.classList.remove('_open')
        this.container.classList.remove('_open')
        this.header.classList.remove('_open-menu')
        document.documentElement.style.overflow = 'auto'

      }else {
        this.button.classList.add('_open')
        this.container.classList.add('_open')
        this.header.classList.add('_open-menu')
        // this.container.scrollIntoView({block: "start", behavior: "smooth"});
        // this.container.scrollTo(0,0)
        // this.container.style.top=window.pageYOffset+'px'
        document.documentElement.style.overflow = 'hidden'
      }
    }
  }
}

export default options