import dotenv from 'dotenv-defaults'
import { createServerDirective } from '@chakra-ui/vue/src/directives'
import { defaultTheme } from '@chakra-ui/vue'

export default {
  mode: 'universal',
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  srcDir: __dirname,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#fff' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'css/page.css',

  ],

  styleResources: {
    less: ['node_modules/@wadiwaw/wadiwaw-core/src/styles/core/variables.less'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'plugins/links.js',
    'plugins/editor.js',
    'plugins/chakra-ui.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    'modules/routes',
    '@nuxtjs/eslint-module',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/emotion',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  router: {
    prefetchLinks: true
  },
  extensions: [
    'mdx'
  ],
  render: {
    bundleRenderer: {
      directives: {
        chakra: createServerDirective(defaultTheme)
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      '@wadiwaw/wadiwaw-core',
      'vue-lorem-ipsum',
      '@chakra-ui/vue',
      '@chakra-ui/theme-vue',
    ],
    additionalExtensions: [
      '.mdx'
    ],
    extend (config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  },
}
