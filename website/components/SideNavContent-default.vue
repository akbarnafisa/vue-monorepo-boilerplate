<template>
  <CBox
    v-bind="$attrs"
    p="3"
    :color="colorMode === 'light' ? 'gray.600': 'whiteAlpha.700'"
  >
    <CBox
      as="nav"
      h="60px"
      d="flex"
      pb="4"
      align-items="center"
    >
      <CLink
        as="nuxt-link"
        w="130px"
        to="/"
        font-weight="bold"
        font-size="1.2rem"
      >
        <Logo />
      </CLink>
      <CBadge
        variant-color="vue"
        variant="solid"
        font-size="0.9em"
        ml="2"
        font-family="mono"
        rounded="md"
        text-transform="lowercase"
      >
        v0.6.6
      </CBadge>

    </CBox>
    <CHeading
      size="xs"
      color="gray.400"
      letter-spacing="wide"
      mb="2"
      text-transform="uppercase"
    >
      Getting Started
    </CHeading>
    <CBox
      v-for="(link, index) in topNavLinks"
      :key="`${index}-getting-started`"
    >
      <CPseudoBox
        as="nuxt-link"
        :to="link.path"
        p="0.2rem"
        outline="none"
        :_focus="{
          shadow: 'outline',
        }"
        :_hover="{
          textDecoration: 'none',
          transform: 'translateX(3px)'
        }"
        transition="background-color,transform 0.15s ease-in"
        d="block"
        rounded="md"
        :bg="$route.path === link.path ? 'vue.50' : 'transparent'"
        :color="$route.path === link.path ? 'vue.700' : 'inherit'"
        font-weight="bold"
        font-size="sm"
        text-decoration="none"
      >
        {{ link.name }}
      </CPseudoBox>
    </CBox>

    <CHeading
      size="xs"
      color="gray.400"
      letter-spacing="wide"
      mt="4"
      mb="2"
      text-transform="uppercase"
    >
      Components
    </CHeading>
    <CPseudoBox
      v-for="(link, index) in componentLinks"
      :key="`${index}-components`"
      as="nuxt-link"
      :to="link.path"
      outline="none"
      p="0.2rem"
      :_focus="{
        shadow: 'outline',
      }"
      :_hover="{
        textDecoration: 'none',
        transform: 'translateX(3px)'
      }"
      transition="background-color,transform 0.15s ease-in"
      d="block"
      rounded="md"
      font-weight="bold"
      font-size="sm"
      text-decoration="none"
      :bg="$route.path === link.path ? 'vue.50' : 'transparent'"
      :color="$route.path === link.path ? 'vue.700' : 'inherit'"
    >
      {{ link.name }}
    </CPseudoBox>
  </CBox>
</template>

<script>
import { CBox, CHeading, CPseudoBox } from '@chakra-ui/vue'
import { stringToUrl } from '../utils'
import { components as componentLinks, topNavLinks } from '../utils/all-routes'

export default {
  name: 'SideNavContent',
  components: {
    CBox,
    CHeading,
    CPseudoBox
  },
  inheritAttrs: false,
  inject: ['$chakraColorMode'],
  props: {
    contentHeight: {
      type: String,
      default: 'calc(100vh - 4rem)'
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
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
