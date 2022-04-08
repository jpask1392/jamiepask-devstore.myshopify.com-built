import { picoapp } from 'picoapp'

import setGender from './components/setGender.js'
import cart from './components/cart.js'
import global from './components/global.js'
import timer from './components/timer.js'
import moduleProductPads from './components/moduleProductPads.js'
import header from './components/header.js'

const state = {
  
}

const components = {
  // setGender,
  cart,
  global,
  timer,
  moduleProductPads,
  header,
}

export default picoapp(components, state)
