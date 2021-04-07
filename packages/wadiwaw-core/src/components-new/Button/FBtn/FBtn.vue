<template>
  <button
    :class="btnClass"
    :disabled="disabled"
    :type="htmlType"
    v-bind="$attrs"
    v-on="$listeners"
  >
    hello from 123
    <slot />
  </button>
</template>

<script>
/**
 * `Wadiwaw` The button can be divided into different kinds of types, states, and sizes. Each of them represented in a form of Vue props.
 */
export default {
  props: {
    /**
     *`Wadiwaw` Change button type
     * @values primary, secondary, error, ghost, ghost-error, pills
     */
    type: {
      type: String,
      default: 'primary',
      validator: (val) => [
        'primary',
        'secondary',
        'error',
        'ghost',
        'ghost-error',
        'pills',
      ].includes(val),
    },
    /**
     *`Wadiwaw` Change button size
     * @values large, square, small, smallFixed, squareSmall, tiny
     */
    size: {
      type: String,
      default: 'large',
      validator: (val) => [
        'large',
        'square',
        'small',
        'smallFixed',
        'squareSmall',
        'tiny',
      ].includes(val),
    },
    /**
     *`Wadiwaw` HTML native type for button
     * @values button, submit, reset
     */
    htmlType: {
      type: String,
      default: 'button',
      validator: (val) => [
        'button',
        'submit',
        'reset',
      ].includes(val),
    },
    /**
     *`Wadiwaw` Change button as an icon
     */
    icon: {
      type: Boolean,
      default: false,
    },
    /**
     *`Wadiwaw` Change button state to disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     *`Wadiwaw` Make the text in button to be algin left
     */
    leftAlign: {
      type: Boolean,
      default: false,
    },
    /**
     *`Wadiwaw` Change button text to uppercase
     */
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass () {
      return [
        'f-btn',
        `f-btn-${this.type}`,
        `f-btn-${this.size}`,
        {
          'f-btn-icon': this.icon,
          'f-btn-leftAlign': this.leftAlign,
          'f-btn-half': this.half,
          'f-btn-uppercase': this.uppercase,
        },
      ]
    },
  },
}
</script>

<style lang="less" src="./f-btn.less" />
