/**
 * @param {any[]} original
 * @param {string|string[]} key
 * @returns {any[]}
 */
export default (original, key) => original.map((value) => {
  const item = {}

  if (typeof key === 'object') {
    key.forEach((itemKey) => {
      item[itemKey] = value[itemKey]
    })

    return item
  }

  return value[key]
})
