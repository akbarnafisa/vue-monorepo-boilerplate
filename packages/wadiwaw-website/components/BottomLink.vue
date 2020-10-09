<template>
  <div v-show="visible">
    <CFlex
      justify="space-between"
      pb="20"
    >
      <div>
        <CLink
          v-if="prevName"
          as="router-link"
          class="link"
          :to="prevPath"
        >
          <c-button
            left-icon="chevron-left"
            border-color="green.500"
            variant-color="green"
            variant="outline"
          >
            {{ prevName }}
          </c-button>
        </CLink>
      </div>

      <div>
        <CLink
          v-if="nextName"
          as="router-link"
          class="link"
          :to="nextPath"
        >
          <c-button
            right-icon="chevron-right"
            border-color="green.500"
            variant-color="green"
            variant="outline"
          >
            {{ nextName }}
          </c-button>
        </CLink>
      </div>
    </CFlex>
  </div>
</template>

<script>
import { CLink, CFlex, CButton } from '@chakra-ui/vue'
import { findNextAndPrevRoute } from '../utils'

export default {
  components: {
    CLink,
    CFlex,
    CButton
  },
  data: () => ({
    prevPath: '',
    prevName: '',
    nextPath: '',
    nextName: '',
    visible: true
  }),
  watch: {
    '$route.path' (nextPath) {
      this.checkRoute(nextPath)
    }
  },
  created () {
    this.checkRoute()
  },
  methods: {
    checkRoute (path) {
      const { prev, next } = findNextAndPrevRoute(path || this.$route.path)
      if (!prev.path && !next.path) {
        this.visible = false
      }
      this.prevPath = prev.path
      this.prevName = prev.name
      this.nextPath = next.path
      this.nextName = next.name
    }
  },
}
</script>

<style lang="scss">
.link {
  &:focus {
    box-shadow: none;
  }

  &:hover {
    text-decoration: none;
  }
}
</style>
