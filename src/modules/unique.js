/**
 * @param {any[]} originalArray
 * @returns {any[]}
 */
export default function unique (originalArray) {
  return originalArray.filter(
    (value, index, self) => self.indexOf(value) === index
  )
}
