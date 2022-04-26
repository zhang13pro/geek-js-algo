import { bubble } from '../src/bubble'

describe('bubble', () => {
  it('should sort an array of numbers', () => {
    const arr = [1, 9, -3, 32, 5, -8]
    expect(bubble(arr)).toEqual([1, 5, -3, 9, 32, -8])
  })

  it('should sort an array of numbers with zeros', () => {
    const arr = [1, 9, -3, 32, 5, 0, -8, 0]
    expect(bubble(arr)).toEqual([1, 5, -3, 9, 32, 0, -8, 0])
  })
})
