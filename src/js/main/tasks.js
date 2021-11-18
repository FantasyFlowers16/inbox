class tasks  {
  constructor() {
    this.container = document.querySelector('.j-tasks')
    this.button = document.querySelector('.j-tasks-button')
  }

  init() {
    this.button.onclick = () => {
      var $this = this;
      setTimeout(function() {
        // $this.button.scrollIntoView({block: "start", behavior: "smooth"})
        console.log($this.container.getBoundingClientRect().top)
        var elementPosition = $this.button.getBoundingClientRect().top;
        var offsetPosition = elementPosition - 67;
        console.log(offsetPosition)
        window.scrollBy({
          top: offsetPosition,
          left: 0,
          behavior: 'smooth'
        });
      },300)
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
