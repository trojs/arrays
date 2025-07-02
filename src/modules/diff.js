import toJson from './toJson.js'

/**
 * @param {any[]} currentArray
 * @param {any[]} otherArray
 * @param {boolean} total
 * @returns {any[]}
 */
export default function diff (currentArray, otherArray, total) {
  const currentArraySet = new Set(toJson(currentArray))
  const otherArraySet = new Set(toJson(otherArray))

  if (total) {
    return [...currentArraySet.symmetricDifference(otherArraySet)].map((item) => JSON.parse(item))
  }
  return [...currentArraySet.difference(otherArraySet)].map((item) => JSON.parse(item))
}
