class select{
  constructor(container) {
    this.container = container
    this.containers = document.querySelectorAll('.j-select')
    this.listOpen = container.querySelector('.j-select-list')
    this.item = container.querySelectorAll('.j-select-item')
    this.title=container.querySelector('.j-select-title')
  }
  init() {
    this.title.onclick = (e) =>{
      this.containers.forEach(el => {
        if(this.container != el){
          el.querySelector('.j-select-list').classList.remove('opened')
        }
      })
      if(!this.listOpen.classList.contains('opened')){
        this.listOpen.classList.add('opened')
        this.item.forEach(item => {
          item.classList.remove('active')
          if(this.title.innerHTML === item.innerHTML){
            item.classList.add('active')
          }
          item.onclick = (e) => {
            let text= item.innerHTML
            this.title.innerHTML=item.innerHTML
                   this.title.innerText=text
            this.listOpen.classList.remove('opened')
          }
        })
      }else{
        this.listOpen.classList.remove('opened')
      }
    }
  }
}
export default select