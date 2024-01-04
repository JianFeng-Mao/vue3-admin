/**
 * 是否是外部链接
 * @param {*} path
 * @returns
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
