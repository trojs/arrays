/**
 * @param {any[]} original
 * @param {string|string[]} key
 * @returns {any[]}
 */
export default (original, key) => original.map((value) => {
  const item = {}

  if (Array.isArray(key)) {
    key.forEach((itemKey) => {
      item[itemKey] = value[itemKey]
    })

    return item
  }

  return value[key]
})
