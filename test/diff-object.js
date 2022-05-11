import { expect, describe, it } from '@jest/globals';
import { Arr } from '../src/helpers.js';

const a = new Arr([{ name: 'John' }, { name: 'Peter' }, { name: 'Luke' }]);
const b = [{ name: 'Peter' }, { name: 'Luke' }, { name: 'Paul' }];

describe('Diff array with objects', () => {
    describe('One side', () => {
        it('Should return the difference, in this example should it be John.', () => {
            expect([{ name: 'John' }]).toEqual(a.diff(b));
        });
    });

    describe('Average both sides', () => {
        it('Should return the difference of both sides, in this example should it be John and Paul.', () => {
            expect([{ name: 'John' }, { name: 'Paul' }]).toEqual(
                a.diff(b, true)
            );
        });
    });
});
