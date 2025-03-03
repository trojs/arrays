import toJson from './toJson.js'

class Diff {
  constructor (currentArray, otherArray, total) {
    this.currentArray = currentArray
    this.otherArray = otherArray
    this.total = total
  }

  get differenceArray () {
    const otherArray = toJson(this.otherArray)
    return this.currentArray.filter(
      (value) => !otherArray.includes(JSON.stringify(value))
    )
  }

  get differenceArrayB () {
    if (!this.total) {
      return []
    }
    const currentArray = toJson(this.currentArray)

    return this.otherArray.filter(
      (value) => !currentArray.includes(JSON.stringify(value))
    )
  }

  get compare () {
    return this.differenceArray.concat(this.differenceArrayB)
  }

  static create (currentArray, otherArray, total) {
    const differ = new Diff(currentArray, otherArray, total)

    return differ.compare
  }
}

/**
 * @param {any[]} currentArray
 * @param {any[]} otherArray
 * @param {boolean} total
 * @returns {any[]}
 */
export default function diff (currentArray, otherArray, total) {
  return Diff.create(currentArray, otherArray, total)
}
