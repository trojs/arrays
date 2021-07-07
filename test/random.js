import { expect, describe, it } from '@jest/globals';
import { Arr } from '../src/helpers.js';

const exampleArray = new Arr([1, 2, 3]);

describe('Random', () => {
    it('Check if the random value is an item from the array.', () => {
        const { random } = exampleArray;

        expect(true).toEqual(exampleArray.includes(random));
    });
});
