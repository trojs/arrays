import toJson from './toJson.js'

/**
 * @param {any[]} original
 * @param {any[]} array
 * @param {boolean} multi
 * @returns {any[]}
 */
export default function intersect (original, array, multi) {
  const jsonValue = toJson(array)
  const arrayLength = array.length

  if (!multi) {
    const currentArraySet = new Set(toJson(original))
    const otherArraySet = new Set(jsonValue)
    return [...currentArraySet.intersection(otherArraySet)].map((item) => JSON.parse(item))
  }

  return original.filter((value) => {
    const valueToJson = JSON.stringify(value)

    const found = jsonValue.reduce((accumulator, currentValue) => {
      if (currentValue.includes(valueToJson)) {
        return accumulator + 1
      }

      return accumulator
    }, 0)

    return found === arrayLength
  })
}
