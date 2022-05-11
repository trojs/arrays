import toJson from './toJson.js';

export default function intersect(original, array, multi) {
    return original.filter((value) => {
        const jsonValue = toJson(array);

        if (multi) {
            const found = jsonValue.reduce((accumulator, currentValue) => {
                if (currentValue.indexOf(JSON.stringify(value)) >= 0) {
                    return accumulator + 1;
                }

                return accumulator;
            }, 0);

            return found === array.length;
        }

        return jsonValue.indexOf(JSON.stringify(value)) >= 0;
    });
}
