import toJson from './toJson.js'

/**
 * @param {any[]} original
 * @param {any[]} array
 * @param {boolean} multi
 * @returns {any[]}
 */
export default function intersect (original, array, multi) {
  const currentArray = toJson(original)

  if (!multi) {
    const currentArraySet = new Set(currentArray)
    const otherArraySet = new Set(toJson(array))
    return [...currentArraySet.intersection(otherArraySet)].map((item) => JSON.parse(item))
  }

  return currentArray.filter(
    (value) => array.every(
      (item) => toJson(item).includes(value)
    )
  )
    .map((item) => JSON.parse(item))
}
