import CodeBlock from './CodeBlock'
import { stringToUrl } from '~/utils'

const MDXComponents = {
  h1: props => ({
    render () {
      const style = {
        fontSize: '.48rem',
        margin: '.48rem 0'
      }
      return (
        <h1 style={style} >
          {this.$slots.default}
        </h1>
      )
    }
  }),
  h2: props => ({
    render () {
      const text = this.$slots.default[0].text
      const style = {
        fontSize: '.24rem',
        fontWeight: 500,
        paddingTop: '.64rem'

      }
      return (
        <h2 style={style} class='h2-mdx' id={stringToUrl(text, '')}>
          <a href={stringToUrl(text, '#')}>#</a>
          { text}
        </h2>
      )
    }
  }),
  h3: props => ({
    render () {
      const text = this.$slots.default[0].text
      const style = {
        fontSize: '.18rem',
        fontWeight: 500,
        marginTop: '.32rem',
        marginBottom: '.16rem'
      }
      return (
        <h3 style={style} class='h3-mdx' id={stringToUrl(text, '')}>
          <a href={stringToUrl(text, '#')}>#</a>
          { text}
        </h3>
      )
    }
  }),
  br: props => ({
    name: 'BR',
    render () {
      const style = {
        fontSize: '.24rem',
      }
      return (
        <div style={style} />
      )
    }
  }),
  inlineCode: props => ({
    name: 'InlineCode',
    render () {
      const style = {
        backgroundColor: '#fedbb0',
        color: '#a15901',
        fontWeight: 700,
        fontSize: '.14rem',
        fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        padding: '0.02rem 0.04rem',
        margin: '.02rem',
        lineHeight: '.28rem'
      }
      return (
        <code style={style}>
          {this.$slots.default}
        </code>
      )
    }
  }),
  'code': CodeBlock,
  pre: props => ({
    render () {
      const style = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '.08rem'
      }
      return (
        <div style={style}>
          {this.$slots.default}
        </div>
      )
    }
  }),
}

export default MDXComponents
