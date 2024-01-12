/**
 * 是否是外部链接
 * @param {*} path
 * @returns
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * 是否为空
 * @param {*} data
 * @returns
 */
export function isEmpty(data) {
  if (Array.isArray(data)) {
    return data.length === 0;
  }
  if (typeof data === 'object') {
    return Object.keys(data).length === 0;
  }
  return [undefined, null, ''].includes(data);
}
