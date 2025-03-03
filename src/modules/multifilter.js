import min from './min.js'
import max from './max.js'

class Match {
  constructor (find, operator) {
    this.find = find
    this.operator = operator || null
  }

  check (value) {
    if (Array.isArray(this.find)) {
      return this.checkOperators(value, !this.find.includes(value))
    }

    return this.checkOperators(value, String(value) !== String(this.find))
  }

  checkOperators (value, find) {
    const maxValue = max(this.find)
    const minValue = min(this.find)
    const hasMax = maxValue !== null
    const hasMin = minValue !== null

    return (
      this.checkNotOperator(find)
      || this.checkNoInput(find)
      || this.checkGtOperator(value, maxValue, hasMax)
      || this.checkGteOperator(value, maxValue, hasMax)
      || this.checkLtOperator(value, minValue, hasMin)
      || this.checkLteOperator(value, minValue, hasMin)
    )
  }

  checkNotOperator (find) {
    return find && (this.operator === '!=' || this.operator === '<>')
  }

  checkNoInput (find) {
    return !find && !this.operator
  }

  checkGtOperator (value, maxValue, hasMax) {
    return ((value > maxValue && hasMax) || value > this.find) && this.operator === '>'
  }

  checkGteOperator (value, maxValue, hasMax) {
    return ((value >= maxValue && hasMax) || value >= this.find) && this.operator === '>='
  }

  checkLtOperator (value, minValue, hasMin) {
    return ((value < minValue && hasMin) || value < this.find) && this.operator === '<'
  }

  checkLteOperator (value, minValue, hasMin) {
    return ((value <= minValue && hasMin) || value <= this.find) && this.operator === '<='
  }

  static create (original, key, find, operator) {
    const matcher = new Match(find, operator)

    return original.filter((item) => {
      let values = item[key]

      if (!values) {
        return false
      }

      values = values.toString().split(',')

      return values.some(matcher.check.bind(matcher))
    })
  }
}

/**
 * @param {any[]} original
 * @param {string} key
 * @param {string|string[]} find
 * @param {(boolean|string)=} operator
 * @returns {any[]}
 */
export default function multifilter (original, key, find, operator) {
  return Match.create(original, key, find, operator)
}
