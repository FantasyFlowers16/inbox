import Menu from './main/menu'
import SearchBlock from './main/search.js'
import View from './main/view.js'
import Actions from './main/actions'
import Tasks from './main/tasks'

import Select from './main/custom/select.js'
import Checkbox from './main/custom/checkbox'


document.addEventListener('DOMContentLoaded', function () {
  let NewMenu = new View()
  NewMenu.init()

  let NewTask = new Tasks()
  NewTask.init()

  let NewAction = new Actions()
  NewAction.init()

  let NewOption = new Menu()
  NewOption.init()

  let NewCheckbox = new Checkbox()
  NewCheckbox.init()

  let Search = new SearchBlock()
  Search.init()

  document.querySelectorAll('.j-select')
    .forEach(block => {
      let NewSelect = new Select(block)
      NewSelect.init()
  })
})