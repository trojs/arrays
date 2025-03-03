/**
 * @param {any[]} original
 * @returns {number}
 */
export default function max (original) {
  if (!Array.isArray(original) || original.length < 1) {
    return null
  }

  return original.reduce((a, b) => Math.max(a, b), -Infinity)
}
