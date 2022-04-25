import { quickSort } from '../src/quick_sort'

describe('quickSort', () => {
  it('正常情况', () => {
    const result = quickSort([3, 3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
    expect(result).toEqual([2, 3, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50])
  })

  it('空数组', () => {
    const result = quickSort([])
    expect(result).toEqual([])
  })

  it('只有一个元素', () => {
    const result = quickSort([1])
    expect(result).toEqual([1])
  })

  it('包含负数', () => {
    const result = quickSort([-1, -2, -3, -4, -5, 8, -6, -7, -8, -9, -10])
    expect(result).toEqual([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 8])
  })
})
