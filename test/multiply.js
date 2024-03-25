import test from 'node:test';
import assert from 'node:assert';
import multiply from '../src/modules/multiply.js'


test('Multiply', async (t) => {
    await t.test('It should return 9 if you send 3 and 3', () => {
        const result = multiply(3, 3);
        const expectedResult = 9;
        assert.strictEqual(result, expectedResult);
    })
    await t.test('It should return 4 if you send 2 and 2', () => {
        const result = multiply(2, 2);
        const expectedResult = 4;
        assert.strictEqual(result, expectedResult);
    })
    await t.test('It should return always 10 if the result is more than 10', () => {
        const result = multiply(4, 4);
        const expectedResult = 10;
        assert.strictEqual(result, expectedResult);
    })
    await t.test('It should return always 1 if the result is less then 1', () => {
        const result = multiply(-1, 1);
        const expectedResult = 1;
        assert.strictEqual(result, expectedResult);
    })
});
