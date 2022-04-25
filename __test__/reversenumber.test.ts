import { reverseNumber } from '../src/reverse_number'

describe('reverseNumber', () => {
  it('正常情况', () => {
    const res = reverseNumber(200)
    expect(res.length).toBe(29)
  })

  it('负数', () => {
    const res = reverseNumber(-3)
    expect(res).toEqual([])
  })
})
