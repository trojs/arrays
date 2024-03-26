import test from 'node:test';
import assert from 'node:assert';
import multiply from '../src/modules/multiply.js';

test('Multiply', async (t) => {
    await t.test('It should return 9 if you send 3 and 3', () => {
        const result = multiply(3, 3);
        const expectedResult = 9;
        assert.strictEqual(result, expectedResult);
    });
});
