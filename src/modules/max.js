/**
 * @param {any[]} original
 * @returns {number}
 */
export default function max (original) {
  if (typeof original !== 'object' || original.length < 1) {
    return null
  }

  return original.reduce((a, b) => Math.max(a, b), 0)
}
