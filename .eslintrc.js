const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/vue3-essential'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          [
            '@',
            path.resolve(__dirname, 'src')
          ]
        ],
        extensions: [
          '.js',
          '.jsx',
          '.vue'
        ]
      }
    }
  },
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' }
    }
  ],
  parserOptions: {
    ecmaVersion: 12,
    allowImportExportEverywhere: true, // 不限制eslint对import使用位置
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'import/extensions': [
      'error',
      'never'
    ],
    'prettier/prettier': 'off',
    'linebreak-style': 'off', // 换行符
    'no-tabs': 'off',
    'array-bracket-newline': [ // 数组括号的开头和结尾之前是否执行换行
      'error',
      {
        multiline: true,
        minItems: 2
      }
    ],
    'array-element-newline': [ // 数组元素之间实行换行
      'error',
      {
        multiline: true,
        minItems: 2
      }
    ],
    'comma-dangle': [ // 不允许尾随逗号
      'error',
      'never'
    ],
    'object-curly-newline': [ // 对象{ 和其后面的标记之间，以及在 } 和其前面的对象字面或结构化赋值的标记之间进行换行
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 2
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 5
        }
      }
    ],
    'vue/html-indent': [
      'error',
      'tab',
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      { selfClosingTag: 'always' }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below'
      }
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: { max: 10 },
        multiline: { max: 1 }
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false
      }
    ],
    // vue组件名是否必须是多单词
    'vue/multi-word-component-names': [0],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        externalIgnores: []
      }
    ],
    'vue/no-v-html': 'off'
  }
};
