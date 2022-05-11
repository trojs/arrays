import { expect, describe, it } from '@jest/globals';
import { Arr } from '../src/helpers.js';

const a = new Arr([{ name: 'John' }, { name: 'Peter' }, { name: 'Luke' }]);
const b = [{ name: 'Peter' }, { name: 'Luke' }, { name: 'Paul' }];
const c = [{ name: 'Luke' }, { name: 'Paul' }, { name: 'John' }];

describe('Intersect array with objects', () => {
    describe('One side', () => {
        it('Should return the intersect, in this example should it be Peter and Luke.', () => {
            expect([{ name: 'Peter' }, { name: 'Luke' }]).toEqual(
                a.intersect(b)
            );
        });
    });

    describe('Average both sides', () => {
        it('Should return the intersect of more than 2 arrays, in this example should it be Luke.', () => {
            expect([{ name: 'Luke' }]).toEqual(a.intersect([b, c], true));
        });
    });
});
