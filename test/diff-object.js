import test from 'node:test';
import assert from 'assert';
import { Arr } from '../src/helpers.js';

const a = new Arr([{ name: 'John' }, { name: 'Peter' }, { name: 'Luke' }]);
const b = [{ name: 'Peter' }, { name: 'Luke' }, { name: 'Paul' }];

test('Diff array with objects', async (t) => {
    await t.test(
        'One side: Should return the difference, in this example should it be John.',
        () => {
            assert.deepEqual([{ name: 'John' }], a.diff(b));
        }
    );

    await t.test(
        'Average both sides: Should return the difference of both sides, in this example should it be John and Paul.',
        () => {
            assert.deepEqual(
                [{ name: 'John' }, { name: 'Paul' }],
                a.diff(b, true)
            );
        }
    );
});
