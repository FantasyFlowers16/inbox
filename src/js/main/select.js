class select{
  constructor(container) {
      this.container = container
      this.select=container.querySelector('.j-custom-select-control')
      this.selectOptions=container.querySelectorAll('.j-custom-select-control option')
      this.listOpen = container.querySelector('.j-select-list')
      this.item = container.querySelectorAll('.j-select-item')
      this.title=container.querySelector('.j-select-title')

  }
  init() {
      var cmp = this;
      cmp.title.onclick = (e) =>{
        console.log(cmp.title.innerHTML)

          if(!cmp.listOpen.classList.contains('opened')){
              cmp.listOpen.classList.add('opened')
              cmp.item.forEach((item,ind) => {
                console.log(item.innerHTML)
                item.classList.remove('active')
                if(cmp.title.innerHTML === item.innerHTML){
                  item.classList.add('active')
                }
                  item.onclick = (e) => {
                     let text= item.innerHTML
                      cmp.title.innerHTML=item.innerHTML
                      cmp.selectOptions.forEach((item,ind)=>{
                          cmp.select[ind].setAttribute('selected', false);
                      })
                      cmp.title.innerText=text
                      console.log(this.listOpen)
                      cmp.listOpen.classList.remove('opened')
                  }
              })
          }else{
              console.log('else', this.listOpen)
              cmp.listOpen.classList.remove('opened')
          }
      }
  }
}
export default select