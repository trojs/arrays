/**
 * @param {any[]} originalArray
 * @returns {number}
 */
export default (originalArray) => {
  if (!Array.isArray(originalArray) || originalArray.length < 1) {
    return null
  }

  return originalArray.reduce((a, b) => a + b, 0)
}
