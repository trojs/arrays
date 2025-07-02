/**
 * @param {any[]} originalArray
 * @returns {any[]}
 */
export default function unique (originalArray) {
  return [...new Set(originalArray)]
}
