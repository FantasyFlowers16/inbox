class view  {
  constructor() {
    this.viewBut = document.querySelector('.j-view-but')
    this.viewMobile = document.querySelector('.j-view')
    this.viewDesktop = document.querySelector('.j-view-desktop')
    this.point= document.querySelectorAll('.j-view-sort-item')
    this.title= document.querySelectorAll('.j-selected-title')
  }


  init() {
    this.viewBut.onclick = () => {
      if (this.viewBut.classList.contains('_open')) {
        console.log('onclick1')
        this.viewBut.classList.remove('_open')
        this.viewMobile.classList.remove('_open')
        this.viewDesktop.classList.remove('_open')
      }else {
        this.viewBut.classList.add('_open')
        this.viewMobile.classList.add('_open')
        this.viewDesktop.classList.add('_open')
      }
    }
    // document.addEventListener('click', e => {
    //   if(e.target != this.viewDesktop && e.target != this.viewBut ){
    //     this.viewBut.classList.remove('_open')
    //     this.viewMobile.classList.remove('_open')
    //     this.viewDesktop.classList.remove('_open')
    //   }
    // })
  }
}

export default view