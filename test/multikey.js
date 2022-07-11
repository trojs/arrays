import test from 'node:test';
import assert from 'assert';
import { Arr } from '../src/helpers.js';

const exampleArray = new Arr([
    {
        id: 0,
        name: 'John',
        age: 93,
        city: 'Patmos',
    },
    {
        id: 1,
        name: 'Peter',
        age: 62,
        city: 'Rome',
    },
    {
        id: 2,
        name: 'Luke',
        age: 84,
        city: 'Boeotia',
    },
    {
        id: 2,
        name: 'Paul',
        age: 62,
        city: 'Rome',
    },
]);

const expectedResults = {
    test1: ['John', 'Peter', 'Luke', 'Paul'],
    test2: [
        {
            name: 'John',
            age: 93,
        },
        {
            name: 'Peter',
            age: 62,
        },
        {
            name: 'Luke',
            age: 84,
        },
        {
            name: 'Paul',
            age: 62,
        },
    ],
};

test('Multikey', async (t) => {
    await t.test(
        'Test 1 (single): Should return the max, in this example should it be 3.',
        () => {
            assert.deepEqual(
                expectedResults.test1,
                exampleArray.multikey('name')
            );
        }
    );

    await t.test(
        'Test 2 (multiple): Should return the max, in this example should it be 3.',
        () => {
            assert.deepEqual(
                expectedResults.test2,
                exampleArray.multikey(['name', 'age'])
            );
        }
    );
});
