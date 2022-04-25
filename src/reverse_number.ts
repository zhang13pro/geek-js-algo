/**
 * 获取0-10000之前的所有回文数
 */
export function reverseNumber(num: number): number[] {
  const res: number[] = []
  if (num < 0) return res

  // > O(n)
  for (let i = 0; i <= num; i++) {
    const s = i.toString()
    const r = s.split('').reverse().join('')
    if (s === r) {
      res.push(i)
    }
  }

  return res
}


// 生成反转数对比
// 字符串双指针比较