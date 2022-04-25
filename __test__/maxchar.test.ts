import { getMaxChar } from '../src/max_char'

describe('getMaxChar', () => {
  it('should return', () => {
    const result = getMaxChar('abbcccccccddddeeeee')
    expect(result).toEqual({ char: 'c', count: 7 })
  })

  it('空字符串', () => {
    const result = getMaxChar('')
    expect(result).toEqual({ char: '', count: 0 })
  })

  it('只有一个字符', () => {
    const result = getMaxChar('a')
    expect(result).toEqual({ char: 'a', count: 1 })
  })

  it('没有连续的字符', () => {
    const result = getMaxChar('abc')
    expect(result).toEqual({ char: 'a', count: 1 })
  })
})
