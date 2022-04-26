/**
 * 数字千分位分割
 */
export function generate(num: number): string {
  let res = ''
  let str = num.toString()
  const len = str.length

  for (let i = len - 1; i >= 0; i--) {
    res = str[i] + res
    if (i > 0 && (len - i) % 3 === 0) {
      res = ',' + res
    }
  }

  return res
}
