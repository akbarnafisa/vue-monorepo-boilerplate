<template functional>
  <div class="preview-code">
    <div class="preview-panel">
      <slot name="preview" />
    </div>
    <div class="editor-panel">
      <div
        chakra-copy-button
        class="copy-button"
      >
        <img :src="require('@/assets/copy.svg')" />
      </div>
      <div class="editable-example-notice">
        Editable Example
      </div>
      <slot name="editor" />
    </div>
  </div>
</template>
<script>

export default {
  name: 'EditorLayout',
  components: {}
}
</script>

<style>
.preview-code {
  display: flex;
  flex-direction: column;
  border-radius: 0.12rem;
  overflow: hidden;
  margin-top: 10px;
  padding: 0.36rem 0.12rem 0.12rem 0.12rem;
  background: white;
}

.preview-panel {
  height: auto;
  background: inherit;
  border-width: 0.01rem;
  border-style: solid;
  border-color: inherit;
  border-radius: 0.05rem;
  overflow: hidden;
  padding: 0.1rem;
  font-size: 0.16rem;
  border-color: rgb(227, 230, 232);
}

.editor-panel {
  height: auto;
  margin-top: 0.32rem;
  border-radius: inherit;
  font-size: 0.08rem;
  position: relative;
}

.editable-example-notice {
  position: absolute;
  color: #f4f7f8;
  background: #011627;
  font-size: 0.8rem;
  top: 0.24rem;
  font-size: 0.12rem;
  color: white;
  z-index: 99;
  top: -0.12rem;
  left: 50%;
  border-radius: 0.08rem 0.08rem 0 0;
  padding: 0.04rem 0.12rem;
  /* left: 50%; */
  transform: translateX(-50%);
}

.prism-editor__code {
  padding-top: 0.36rem;
}
</style>
