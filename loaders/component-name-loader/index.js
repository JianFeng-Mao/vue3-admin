/**
 * 向vue文件插入name属性
 */
const { parse, compileScript } = require('vue/compiler-sfc');

function ComponentNameLoader(source) {
  // { ignoreEmpty: false } 必须，否则会提示：Error: [@vue/compiler-sfc] SFC contains no <script> tags.
  const { descriptor } = parse(source, { ignoreEmpty: false });
  const { script, scriptSetup } = descriptor;
  // 兼容 vue文件未定义 script 标签的情况
  if (script || scriptSetup) {
    // requires passing the `id` option
    const { attrs } = compileScript(descriptor, { id: '' });
    const { name, lang } = attrs;
    if (name) {
      source += `
      <script${lang ? ` lang=${lang}` : ''}>
        export default {
          name: '${name}'
        }
      </script>
    `;
    }
  }
  return source;
}

module.exports = ComponentNameLoader;
