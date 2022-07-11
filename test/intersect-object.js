import test from 'node:test';
import assert from 'assert';
import { Arr } from '../src/helpers.js';

const a = new Arr([{ name: 'John' }, { name: 'Peter' }, { name: 'Luke' }]);
const b = [{ name: 'Peter' }, { name: 'Luke' }, { name: 'Paul' }];
const c = [{ name: 'Luke' }, { name: 'Paul' }, { name: 'John' }];

test('Intersect array with objects', async (t) => {
    await t.test(
        'One side: Should return the intersect, in this example should it be Peter and Luke.',
        () => {
            assert.deepEqual(
                [{ name: 'Peter' }, { name: 'Luke' }],
                a.intersect(b)
            );
        }
    );

    await t.test(
        'Average both sides: Should return the intersect of more than 2 arrays, in this example should it be Luke.',
        () => {
            assert.deepEqual([{ name: 'Luke' }], a.intersect([b, c], true));
        }
    );
});
