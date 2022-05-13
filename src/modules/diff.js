import toJson from './toJson.js';

class Diff {
    constructor(currentArray, otherArray, total) {
        this.currentArray = currentArray;
        this.otherArray = otherArray;
        this.total = total;
    }

    get differenceArray() {
        return this.currentArray.filter(
            (value) => !toJson(this.otherArray).includes(JSON.stringify(value))
        );
    }

    get differenceArrayB() {
        if (!this.total) {
            return [];
        }

        return this.otherArray.filter(
            (value) =>
                !toJson(this.currentArray).includes(JSON.stringify(value))
        );
    }

    get compare() {
        return this.differenceArray.concat(this.differenceArrayB);
    }

    static create(currentArray, otherArray, total) {
        const differ = new Diff(currentArray, otherArray, total);

        return differ.compare;
    }
}

export default function diff(currentArray, otherArray, total) {
    return Diff.create(currentArray, otherArray, total);
}
