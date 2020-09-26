import Vue from 'vue'
import FBtn from './Button/FBtn/FBtn'
import FBtnWrapper from './Button/FBtnWrapper/FBtnWrapper'

const components = {
  FBtn,
  FBtnWrapper,
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
