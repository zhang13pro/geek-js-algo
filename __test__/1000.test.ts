import { generate } from '../src/1000'

describe('generate', () => {
  it('should return 12', () => {
    expect(generate(12)).toBe('12')
  })

  it('should return 999', () => {
    expect(generate(999)).toBe('999')
  })

  it('should return "3,203"', () => {
    expect(generate(3203)).toBe('3,203')
  })

  it('should return "1,234,000"', () => {
    expect(generate(1234000)).toBe('1,234,000')
  })

  it('should return "8,542,057,678"', () => {
    expect(generate(8542057678)).toBe('8,542,057,678')
  })
})
