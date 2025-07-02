import { randomInt } from 'crypto'

/**
 * @param {any[]} originalArray
 * @returns {any}
 */
export default (originalArray) => {
  const minimum = 0
  const maximum = originalArray.length
  const randomIndex = randomInt(minimum, maximum)

  return originalArray[randomIndex]
}
