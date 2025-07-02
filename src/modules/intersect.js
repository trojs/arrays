import toJson from './toJson.js'

/**
 * @param {any[]} original
 * @param {any[]} array
 * @param {boolean} multi
 * @returns {any[]}
 */
export default function intersect (original, array, multi) {
  const jsonValue = toJson(array)

  if (!multi) {
    const currentArraySet = new Set(toJson(original))
    const otherArraySet = new Set(jsonValue)
    return [...currentArraySet.intersection(otherArraySet)].map((item) => JSON.parse(item))
  }

  return original.filter((value) => array.every((item) => {
    const otherArraySet = new Set(toJson(item))
    return new Set(toJson([value])).isSubsetOf(otherArraySet)
  }))
}
