/**
 * @param {any[]} original
 * @returns {number}
 */
export default (original) => {
  if (!Array.isArray(original) || original.length < 1) {
    return null
  }

  return original.reduce((a, b) => Math.min(a, b), Infinity)
}
