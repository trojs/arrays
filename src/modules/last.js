/**
 * @param {any[]} originalArray
 * @returns {any}
 */
export default function last (originalArray) {
  if (!Array.isArray(originalArray) || originalArray.length < 1) {
    return null
  }

  return originalArray.at(-1)
}
