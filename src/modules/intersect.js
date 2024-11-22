import toJson from './toJson.js'

export default function intersect(original, array, multi) {
    const jsonValue = toJson(array)
    const arrayLength = array.length

    return original.filter((value) => {
        const valueToJson = JSON.stringify(value)
        if (multi) {
            const found = jsonValue.reduce((accumulator, currentValue) => {
                if (currentValue.includes(valueToJson)) {
                    return accumulator + 1
                }

                return accumulator
            }, 0)

            return found === arrayLength
        }

        return jsonValue.includes(valueToJson)
    })
}
