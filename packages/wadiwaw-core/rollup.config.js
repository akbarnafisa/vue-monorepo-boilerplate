import path from 'path'
import globby from 'globby'
import vue from 'rollup-plugin-vue'
import cjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'

// import resolve from 'rollup-plugin-node-resolve'
// import cjs from 'rollup-plugin-commonjs'


const index = {
  'index-es': 'src/components-new/index-es.js',
  globalComponents: 'src/components-new/globalComponents.js'
}

const vuePluginConfig = {
  template: {
    isProduction: true,
    compilerOptions: {
      whitespace: 'condense'
    }
  },
  css: false
}

const babelConfig = {
  exclude: 'node_modules/**',
  babelHelpers: 'runtime',
  skipPreflightCheck: true,
  babelrc: false,
  presets: [['@babel/preset-env', { modules: false }]],
  extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue', '.svg'],
}


const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]
const projectRootDir = path.resolve(__dirname)
const plugins = [
  alias({
    entries: [
      {
        find: new RegExp('^@/(.*)$'),
        replacement: path.resolve(projectRootDir, 'src/$1')
      }
    ]
  }),
  resolve({
    extensions: ['.vue', '.js']
  }),
  image(),
  postcss({
    modules: true,
    modules: {},
    inject: { insertAt: 'top' }
  }),
  vue(vuePluginConfig),
  babel(babelConfig),
  cjs(),
]

function generateComponentInput (pathList) {
  return pathList.reduce((acc, curr) => ({
    ...acc,
    [curr.split('/')[3]]: curr
  }), {})
}

function combineInput (componentInput, index) {
  return {
    ...index,
    ...componentInput
  }
}

export default globby([
  'src/components-new/**/*.vue',
  '!src/components-new/_Common/*.vue'
])
  .then((pathList) => generateComponentInput(pathList))
  .then((result) => {
    console.log(result)
    return result
  })
  .then((componentInput) => ([
    {
      input: combineInput(componentInput, index),
      output: {
        dir: 'dist/esm',
        format: 'esm'
      },
      plugins,
      external
    },
    {
      input: combineInput(componentInput, index),
      output: {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'named'
      },
      plugins,
      external
    },
  ]))
