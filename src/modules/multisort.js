class Sorter {
/**
 * @param {string} key
 * @param {("desc"|"asc")} direction
 */
  constructor (key, direction) {
    this.key = key
    this.moveDirection = direction === 'desc' ? -1 : 1
  }

  order (original) {
    return original.toSorted(this.compare.bind(this))
  }

  compare (firstElement, secondElement) {
    let nameA = firstElement[this.key]
    let nameB = secondElement[this.key]

    if (typeof nameA === 'string') {
      nameA = nameA.toUpperCase()
    }

    if (typeof nameB === 'string') {
      nameB = nameB.toUpperCase()
    }

    if (nameA < nameB) {
      return -1 * this.moveDirection
    }

    if (nameA > nameB) {
      return 1 * this.moveDirection
    }

    return 0
  }

  static create (original, key, direction) {
    const sorter = new Sorter(key, direction)

    return sorter.order(original)
  }
}

/**
 *
 * @param {any[]} original
 * @param {string} key
 * @param {("desc"|"asc")=} direction
 * @returns {any[]}
 */
export default (original, key, direction) => Sorter.create(original, key, direction)
