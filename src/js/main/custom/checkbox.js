class checkbox  {
  constructor() {
    this.checkboxBut = document.querySelector('.j-checkbox-main')
    this.checkboxes = document.querySelectorAll('.j-checkbox')
    this.actions = document.querySelector('.j-action-button')
    this.actionContainer = document.querySelector('.j-action-upper-block')

  }

  init() {
    let actual = 0
    // click main checkbox
    this.checkboxBut.onclick = () => {
      if (this.checkboxBut.checked) {
        this.actions.classList.add('_visible')
        this.actionContainer.classList.add('_open')
        this.checkboxes.forEach(el => {
          el.checked = true
        })
      }else {
        this.actions.classList.remove('_visible')
        this.actionContainer.classList.remove('_open')
        this.checkboxes.forEach(el => {
          el.checked = false
        })
      }
    }
     // click other checkbox
    this.checkboxes.forEach(el => {
      el.onclick = () => {
        if (Array.from(this.checkboxes).find(node => node.checked)){
          this.actions.classList.add('_visible')
          this.actionContainer.classList.add('_open')
        } else {
          this.actions.classList.remove('_visible')
          this.actionContainer.classList.remove('_open')
        }
        if (!el.checked) {
          this.checkboxBut.checked = false
        }
      }
    })
  }
}

export default checkbox