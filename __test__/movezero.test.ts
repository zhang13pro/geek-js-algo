import { moveZeroToEnd } from '../src/move_zero'

describe('moveZeroToEnd', () => {
  it('should be', () => {
    const result = moveZeroToEnd([0, 1, 3, 0, 12])
    expect(result).toEqual([1, 3, 12, 0, 0])
  })

  it('should be with all 0', () => {
    const result = moveZeroToEnd([0, 0, 0, 0])
    expect(result).toEqual([0, 0, 0, 0])
  })

  it('should be without 0', () => {
    const result = moveZeroToEnd([1, 2, 3])
    expect(result).toEqual([1, 2, 3])
  })

  it('should be whit double 0', () => {
    const result = moveZeroToEnd([0, 0, 0, 3, 0, 12])
    expect(result).toEqual([3, 12, 0, 0, 0, 0])
  })
})
