module.exports = {
  plugins: ['sonarjs', 'jest'],
  extends: [
    'antife',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    'vue/no-v-html': 0,
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
