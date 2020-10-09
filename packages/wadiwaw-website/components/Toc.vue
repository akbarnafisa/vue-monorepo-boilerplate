<template>
  <div>
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
</template>

<script>
export default {
  data () {
    return {
      headingTag: [],
      toc: [],
      tocEntryActive: null,
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.renderToc()
      this.applyObserver()
      this.$nextTick(() => {
        this.applyScroll()
      })
    },
    renderToc () {
      const $els = document.querySelectorAll('h2[id], h3[id]')
      console.log('render', $els)
      console.log(this.wew)

      const arr = []
      $els.forEach($el => {
        arr.push({
          name: $el.textContent.replace('#', ''),
          path: `#${$el.id}`
        })
      })
      this.headingTag = $els
      this.toc = arr
    },
    applyObserver () {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          const $el = document.querySelector(`.content__toc a[href="#${id}"]`)
          if (entry.isIntersecting) {
            if (this.tocEntryActive) {
              this.tocEntryActive.classList.remove('active');
            }
            this.tocEntryActive = $el
            $el.classList.add('active');
          }
        });
      }, {
        root: null,
        rootMargin: '0% 0% -30% 0%'
      });

      this.headingTag.forEach(section => {
        observer.observe(section);
      });
    },
    applyScroll () {
      console.log('scroll')
      document.querySelectorAll('.content__toc a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            duration: 100
          });
        });
      });
    }
  },
}
</script>

<style lang="less" scoped>
.content__toc {
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
</style>