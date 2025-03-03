/**
 * @param {any[]} original
 * @returns {number}
 */
export default function min (original) {
  if (typeof original !== 'object' || original.length < 1) {
    return null
  }

  return original.reduce((a, b) => Math.min(a, b), Infinity)
}
