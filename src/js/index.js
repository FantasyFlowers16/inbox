import Menu from './menu/menuBlock.js'
import SearchBlock from './main/search.js'
import Select from './main/select.js'
import Options from './main/opions'
import actions from './main/actions'
import Checkbox from './main/checkbox'


document.addEventListener('DOMContentLoaded', function () {
  let NewMenu = new Menu()
  NewMenu.init()

  let NewAction = new actions()
  NewAction.init()

  let NewOption = new Options()
  NewOption.init()

  let NewCheckbox = new Checkbox()
  NewCheckbox.init()

  let Search = new SearchBlock()
  Search.init()

  document.querySelectorAll('.j-custom-select')
    .forEach(block => {
      let NewSelect = new Select(block)
      NewSelect.init()
  })
})