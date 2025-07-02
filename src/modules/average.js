import summ from './summ.js'

/**
 * @param {any[]} originalArray
 * @returns {number}
 */
export default (originalArray) => {
  if (!Array.isArray(originalArray) || originalArray.length < 1) {
    return null
  }

  return summ(originalArray) / originalArray.length
}
