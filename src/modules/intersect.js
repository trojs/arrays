export default function intersect(original, array, multi) {
    return original.filter((value) => {
        if (multi) {
            const found = array
                .map((item) => JSON.stringify(item))
                .reduce((accumulator, currentValue) => {
                    if (currentValue.indexOf(JSON.stringify(value)) >= 0) {
                        return accumulator + 1;
                    }

                    return accumulator;
                }, 0);

            return found === array.length;
        }

        return (
            array
                .map((item) => JSON.stringify(item))
                .indexOf(JSON.stringify(value)) >= 0
        );
    });
}
