<template>
  <button
    :class="btnClass"
    :disabled="disabled"
    :type="htmlType"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
/**
 * `FIAT` The button can be divided into different kinds of types, states, and sizes. Each of them represented in a form of Vue props.
 */
export default {
  props: {
    /**
     *`FIAT` Change button type
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
     *`FIAT` Change button size
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
     *`FIAT` HTML native type for button
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
     *`FIAT` Change button as an icon
     */
    icon: {
      type: Boolean,
      default: false,
    },
    /**
     *`FIAT` Change button state to disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     *`FIAT` Make the text in button to be algin left
     */
    leftAlign: {
      type: Boolean,
      default: false,
    },
    /**
     *`FIAT` Change button text to uppercase
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
