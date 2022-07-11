import test from 'node:test';
import assert from 'assert';
import { Arr } from '../src/helpers.js';

const a = new Arr(['John', 'Peter', 'Luke']);
const b = ['Peter', 'Luke', 'Paul'];
const c = ['Luke', 'Paul', 'John'];

test('Intersect', async (t) => {
    await t.test(
        'One side: Should return the intersect, in this example should it be Peter and Luke.',
        () => {
            assert.deepEqual(['Peter', 'Luke'], a.intersect(b));
        }
    );
    await t.test(
        'Average both sides: Should return the intersect of more than 2 arrays, in this example should it be Luke.',
        () => {
            assert.deepEqual(['Luke'], a.intersect([b, c], true));
        }
    );
});
