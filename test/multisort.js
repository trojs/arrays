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
    test1: [
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
        {
            id: 2,
            name: 'Paul',
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
            id: 0,
            name: 'John',
            age: 93,
            city: 'Patmos',
        },
    ],
    test2: [
        {
            id: 0,
            name: 'John',
            age: 93,
            city: 'Patmos',
        },
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
        },
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
        {
            id: 2,
            name: 'Paul',
            age: 62,
            city: 'Rome',
        },
    ],
    test3: [
        {
            id: 0,
            name: 'John',
            age: 93,
            city: 'Patmos',
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
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
    ],
};

exampleArray.multisort('age', 'desc');

test('Multisort', async (t) => {
    await t.test(
        'Test 1 (ASC): Should return the array, sorted by age asc.',
        () => {
            assert.deepEqual(
                expectedResults.test1,
                exampleArray.multisort('age', 'asc')
            );
        }
    );

    await t.test(
        'Test 2 (DESC): Should return the array, sorted by age desc.',
        () => {
            assert.deepEqual(
                expectedResults.test2,
                exampleArray.multisort('age', 'desc')
            );
        }
    );

    await t.test(
        'Test 3 (sort text ASC): Should return the array, sorted by age asc.',
        () => {
            assert.deepEqual(
                expectedResults.test3,
                exampleArray.multisort('name', 'asc')
            );
        }
    );
});
