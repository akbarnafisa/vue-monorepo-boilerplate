<template>
  <div class="f-flex">
    <Sidebar />
    <div class="content">
      <div class="content__wrapper">
        <MDXProvider :components="MDXComponents">
          <Nuxt id="page-content" />
        </MDXProvider>
      </div>

      <div class="content__toc">
        <div class="f-title title-14 secondary mb-16">
          CONTENTS
        </div>
        <a
          v-for="(link, index) in toc"
          :key="index"
          :href="link.path"
        >
          <span class="dot" />
          {{link.name}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import { MDXProvider } from 'mdx-vue'
import MDXComponents from '../components/MDXComponents'

import '@wadiwaw/wadiwaw-core/src/styles/index.less'
import '../css/components.less'

export default {
  components: {
    MDXProvider,
    Sidebar,
  },
  data () {
    return {
      MDXComponents,
      toc: []
    }
  },
  mounted () {
    const $els = document.querySelectorAll('h2[id], h3[id]')
    const arr = []
    $els.forEach($el => {
      arr.push({
        name: $el.textContent.replace('#', ''),
        path: `#${$el.id}`
      })
    })
    this.toc = arr

    console.log
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const $el = document.querySelector(`.content__toc a[href="#${id}"]`)

        // }
        if (entry.isIntersecting) {
          console.log(this.tocEntryActive)
          if (this.tocEntryActive) {
            this.tocEntryActive.classList.remove('active');
          }
          this.tocEntryActive = $el
          $el.classList.add('active');
          return
        }
        $el.classList.remove('active');
      });
    }, {
      root: null,
      rootMargin: '0% 0% -50% 0%'
    });

    // Track all sections that have an `id` applied
    $els.forEach((section) => {
      observer.observe(section);
    });


  }


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

  &__toc {
    position: fixed;
    width: 2rem;
    position: fixed;
    top: 20%;
    left: calc(8.5rem + 2.79rem);
    z-index: 3;

    a {
      font-size: 0.14rem;
      display: block;
      color: @grey-70;
      padding: 0.08rem 0 0.08rem 0.16rem;
      display: flex;
      align-items: center;
      transform: translateX(-0.12rem);
      transition: all 0.15s ease;
      .dot {
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 50%;
        background-color: @blue-50;
        display: inline-block;
        margin-right: 0.12rem;
        opacity: 0;
      }
      &.active {
        color: @blue-50;
        font-weight: 500;
        transform: translateX(0);
        .dot {
          opacity: 1;
        }
      }
      &:hover {
        color: @blue-50;
      }
    }
  }
}
</style>