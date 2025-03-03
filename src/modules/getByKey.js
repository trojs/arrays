/**
 *
 * @param {object} original
 * @param {string} key
 * @param {object=} defaultValue
 * @returns {any|undefined}
 */
export default function getByKey (original, key, defaultValue) {
  const keys = key.split('.')

  let reference = original

  while (keys.length > 0) {
    const referenceKey = keys.shift()

    if (
      reference === null
      || reference === undefined
      || !Object.hasOwn(reference, referenceKey)
    ) {
      return defaultValue
    }
    reference = reference[referenceKey]
  }

  return reference
}
