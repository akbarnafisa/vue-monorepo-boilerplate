import Vue from 'vue'

Vue.component('InlineCode', {
  render (h) {
    return h('code', this.$slots.default)
  }
})
