/**
 *
 * @param {any[]} originalArray
 * @param {any[]} newValues
 * @param {string[]} keys
 * @returns {any[]}
 */
export default (originalArray, newValues, keys) => originalArray.map((item) => {
  const found = newValues.find((newItem) =>
    keys.every((key) => newItem[key] === item[key])
  )

  return found ? { ...item, ...found } : item
})
