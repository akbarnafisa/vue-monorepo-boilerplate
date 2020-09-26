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
    'vue/attribute-hyphenation': ['never', {
      "ignore": []
    }],
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
