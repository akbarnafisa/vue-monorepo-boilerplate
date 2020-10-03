<template>
  <nav class="nav__sidebar p-16">
    <div class="f-title title-14 secondary mb-6">
      GETTING STARTED
    </div>

    <div
      v-for="(link, index) in topNavLinks"
      :key="`${index}-getting-started`"
      class="f-body body-14 text-grey-80"
      :class="{'isNotActive': !isRootPath}"
    >
      <nuxt-link :to="link.path">
        {{ link.name }}
      </nuxt-link>
    </div>

    <div class="f-title title-14 secondary mt-24 mb-6">
      COMPONENTS
    </div>

    <div
      v-for="(link, index) in componentLinks"
      :key="`${index}-component`"
      class="f-body body-14 text-grey-80"
    >
      <nuxt-link :to="link.path">
        {{ link.name }}
      </nuxt-link>
    </div>

  </nav>
</template>

<style lang="less">
.nav__sidebar {
  max-width: 2.79rem;
  width: 100%;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: @white;

  .nuxt-link-active {
    color: @blue-60;
    background-color: @blue-10;
    font-weight: 500;
  }

  .isNotActive {
    a {
      color: @grey-70;
      background-color: initial;
      font-weight: 400;
    }
  }

  a {
    font-weight: normal;
    padding: 12px 16px;
    outline: none;
    transition: background-color 0s ease 0s, transform 0.15s ease-in 0s;
    display: block;
    border-radius: 0.04rem;
    text-decoration: none;
    color: @grey-70;
    transform: translateX(0px);

    &:hover {
      color: @grey-90;
      transform: translateX(4px);
      color: @blue-60;
    }
  }
}
</style>

<script>
import { stringToUrl } from '../utils'
import { components as componentLinks, topNavLinks } from '../utils/all-routes'

export default {
  computed: {
    isRootPath () {
      return this.$route.name === 'index'
    },
    topNavLinks () {
      return this.parsedLinks(topNavLinks)
    },
    componentLinks () {
      return this.parsedLinks(
        componentLinks
          .filter(link => link !== 'Index')
      )
    },
    parsedLinks () {
      return value => Array.isArray(value)
        ? value.map(link => ({ name: link, path: link !== 'Getting Started' ? stringToUrl(link) : '/' }))
        : []
    }
  }
}
</script>
