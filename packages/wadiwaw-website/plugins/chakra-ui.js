import Vue from 'vue'
import * as Chakra from '@chakra-ui/vue'
import theme from '@chakra-ui/theme-vue'
import Lorem from 'vue-lorem-ipsum'

const breakpoints = ['30em', '48em', '72em', '80em']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const customTheme = {}

Vue.use(Chakra.default, {
  theme: {
    ...theme,
    breakpoints
  },
  extendTheme: customTheme,

})

Vue.component('Lorem', Lorem)

Object.keys(Chakra).forEach((key) => {
  if (typeof Chakra[key] === 'object' && Chakra[key].name) {
    Vue.component(Chakra[key].name, Chakra[key])
  }
})
