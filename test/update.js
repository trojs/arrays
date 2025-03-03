import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const exampleArray = new Arr([
  {
    id: 1,
    name: 'first',
    value: 'X'
  },
  {
    id: 2,
    name: 'second',
    value: 'Y'
  }
])

test('Update', async (t) => {
  await t.test('Update the last item', () => {
    const results = exampleArray.update(
      [
        {
          id: 2,
          name: 'last'
        }
      ],
      ['id']
    )
    const expectedResults = [
      {
        id: 1,
        name: 'first',
        value: 'X'
      },
      {
        id: 2,
        name: 'last',
        value: 'Y'
      }
    ]
    assert.deepEqual(results, expectedResults)
  })

  await t.test('Update the first item', () => {
    const results = exampleArray.update(
      [
        {
          id: 1,
          name: 'first'
        }
      ],
      ['id', 'name']
    )
    const expectedResults = [
      {
        id: 1,
        name: 'first',
        value: 'X'
      },
      {
        id: 2,
        name: 'second',
        value: 'Y'
      }
    ]
    assert.deepEqual(results, expectedResults)
  })

  await t.test('Update both items', () => {
    const results = exampleArray.update(
      [
        {
          id: 1,
          name: 'een'
        },
        {
          id: 2,
          name: 'twee'
        }
      ],
      ['id']
    )
    const expectedResults = [
      {
        id: 1,
        name: 'een',
        value: 'X'
      },
      {
        id: 2,
        name: 'twee',
        value: 'Y'
      }
    ]
    assert.deepEqual(results, expectedResults)
  })

  await t.test('Try to update unknown item', () => {
    const results = exampleArray.update(
      [
        {
          id: 3,
          name: 'unknown'
        }
      ],
      ['id']
    )
    const expectedResults = [
      {
        id: 1,
        name: 'first',
        value: 'X'
      },
      {
        id: 2,
        name: 'second',
        value: 'Y'
      }
    ]
    assert.deepEqual(results, expectedResults)
  })

  await t.test(
    'Try to update unknown item because not all keys are correct',
    () => {
      const results = exampleArray.update(
        [
          {
            id: 1,
            name: 'unknown'
          }
        ],
        ['id', 'name']
      )
      const expectedResults = [
        {
          id: 1,
          name: 'first',
          value: 'X'
        },
        {
          id: 2,
          name: 'second',
          value: 'Y'
        }
      ]
      assert.deepEqual(results, expectedResults)
    }
  )
})
