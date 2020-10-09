import 'prismjs'
import PrismEditor from 'vue-prism-editor'
import '../css/night-owl.css'
import 'vue-prism-editor/dist/VuePrismEditor.css'
import copy from 'copy-to-clipboard'
import LiveEditor from './LiveEditor'

function getLanguage (string) {
  return string.slice(string.indexOf('-') + 1)
}

const CodeBlock = props => ({
  name: 'CodeBlock',
  props: {
    lang: {
      type: String,
      default: 'vue'
    },
    isReadOnly: {
      type: Boolean,
      default: true
    },
    emitEvents: {
      type: Boolean,
      default: false
    },
    lineNumbers: {
      type: Boolean,
      default: false
    },
    autoStyleLineNumbers: {
      type: Boolean,
      default: true
    },
    live: Boolean
  },
  data () {
    return {
      text: undefined,
      copyTimeout: null,
      copyButtonIcon: true
    }
  },
  methods: {
    async copy () {
      // Copy text to clipboard
      await copy(this.text)

      // Handle timeouts for copy button text
      if (this.copyTimeout) { clearTimeout(this.copyTimeout) }
      this.copyButtonIcon = false
      this.copyTimeout = setTimeout(() => {
        this.copyButtonIcon = true
        clearTimeout(this.copyTimeout)
      }, 1000)
    }
  },
  render (h) {
    const language = getLanguage(props.className)
    const code = this.$slots.default[0].text
    this.text = code
    const icon = this.copyButtonIcon ? require('@/assets/copy.svg') : require('@/assets/tick.svg')

    if (!props.live) {
      return h('div', {
        style: {
          borderRadius: '0.04rem',
          position: 'relative',
          fontSize: '0.9rem'
        },
      }, [
        h(PrismEditor, {
          props: {
            code,
            language,
            readonly: true,
            ...this.$props
          }
        }),
        h('div', {
          class: {
            'copy-button': true
          },
          on: {
            click: this.copy
          }
        }, [
          h('img', {
            attrs: {
              src: icon
            }
          }),
        ]),
      ])
    }
    else {
      const liveEditor = h(LiveEditor, {
        props: {
          code
        }
      })
      if (props.browser) {
        return h('client-only', [liveEditor])
      } else {
        return liveEditor
      }
    }
  }
})

export default CodeBlock
