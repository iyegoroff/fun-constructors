import {
  arrayFrom,
  arrayOf,
  mapOf,
  mutableArrayFrom,
  mutableArrayOf,
  mutableMapOf,
  mutableSetOf,
  setOf,
  weakMapOf,
  weakSetOf
} from '../src'

describe('fun-constructors', () => {
  test('arrayOf', () => {
    const arr = arrayOf(1, 2, 3)
    expect(arr).toEqual<typeof arr>(Array.of(1, 2, 3))
  })

  test('mutableArrayOf', () => {
    const arr = mutableArrayOf(1, 2, 3)
    expect(arr).toEqual<typeof arr>(Array.of(1, 2, 3))
  })

  test('arrayFrom', () => {
    const arr = arrayFrom([1, 2, 3], (x) => x + 1)
    expect(arr).toEqual<typeof arr>(Array.from([1, 2, 3], (x) => x + 1))
  })

  test('mutableArrayFrom', () => {
    const arr = mutableArrayFrom([1, 2, 3], (x) => x + 1)
    expect(arr).toEqual<typeof arr>(Array.from([1, 2, 3], (x) => x + 1))
  })

  test('mapOf', () => {
    const map = mapOf([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ])
    expect(map).toEqual<typeof map>(
      new Map([
        [1, 'a'],
        [2, 'b'],
        [3, 'c']
      ])
    )
  })

  test('mutableMapOf', () => {
    const map = mutableMapOf([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ])
    expect(map).toEqual<typeof map>(
      new Map([
        [1, 'a'],
        [2, 'b'],
        [3, 'c']
      ])
    )
  })

  test('setOf', () => {
    const set = setOf(['a', 'b', 'c'])
    expect(set).toEqual<typeof set>(new Set(['a', 'b', 'c']))
  })

  test('mutableSetOf', () => {
    const set = mutableSetOf(['a', 'b', 'c'])
    expect(set).toEqual<typeof set>(new Set(['a', 'b', 'c']))
  })

  test('weakMapOf', () => {
    const map = weakMapOf([
      [{}, 'a'],
      [{}, 'b'],
      [{}, 'c']
    ])
    expect(map).toEqual<typeof map>(
      new WeakMap([
        [{}, 'a'],
        [{}, 'b'],
        [{}, 'c']
      ])
    )
  })

  test('weakSetOf', () => {
    const set = weakSetOf([{}, {}, {}])
    expect(set).toEqual<typeof set>(new WeakSet([{}, {}, {}]))
  })
})
