module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    'import/resolver': {
      // 解决项目中使用 webpack的别名alias 错误
      // eslint-import-resolver-alias
      alias: {
        map: [['@', './src']],
        extensions: ['.vue', '.js', '.jsx', '.json']
      }
    }
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/vue3-essential'
  ],
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
    'import/extensions': 'off', // 禁用是否使用文件扩展名检测（只能配置项目中import的都带文件名扩展名或者都不带？）
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     ignorePackages: false,
    //     pattern: {
    //       js: 'never',
    //       jsx: 'never',
    //       vue: 'never',
    //       json: 'never'
    //     }
    //   }
    // ],
    'prefer-destructuring': [
      'error',
      {
        object: false,
        array: false
      }
    ],
    'class-methods-use-this': ['error', { exceptMethods: ['apply'] }],
    'import/no-extraneous-dependencies': 'off',
    'space-before-function-paren': [
      'error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-param-reassign': 'off',
    'func-names': 'off',
    'prettier/prettier': 'off',
    'linebreak-style': 'off', // 换行符
    'no-tabs': 'off',
    'array-bracket-newline': [ // 数组括号的开头和结尾之前是否执行换行
      'error',
      {
        multiline: true
      }
    ],
    'array-element-newline': [ // 数组元素之间实行换行
      'error',
      'consistent'
    ],
    'comma-dangle': [ // 不允许尾随逗号
      'error',
      'never'
    ],
    'object-curly-newline': [ // 对象{ 和其后面的标记之间，以及在 } 和其前面的对象字面或结构化赋值的标记之间进行换行
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
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
