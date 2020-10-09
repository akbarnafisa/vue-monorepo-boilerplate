<template>
  <div class="f-flex">
    <Sidebar />
    <div class="content">
      <div class="content__wrapper">
        <MDXProvider :components="MDXComponents">
          <Nuxt id="page-content" />
        </MDXProvider>
      </div>
      <Toc ref="toc" />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import { MDXProvider } from 'mdx-vue'
import MDXComponents from '../components/MDXComponents'
import Toc from '../components/Toc'

import '@wadiwaw/wadiwaw-core/src/styles/index.less'
import '../css/components.less'

export default {
  components: {
    MDXProvider,
    Sidebar,
    Toc,
  },
  data () {
    return {
      MDXComponents,
      toc: []
    }
  },
  watch: {
    '$route.path' (newVal) {
      setTimeout(() => {
        this.$refs.toc.init()
      }, 200)
    }
  },
}
</script>


<style lang="less" scoped>
.content {
  width: 100%;
  min-height: 100vh;
  background: rgb(244, 245, 252);
  border-radius: 0.48rem 0 0 0;
  margin-left: 2.79rem;

  &__wrapper {
    padding: 0.36rem;
    max-width: 8.5rem;
  }
}
</style>