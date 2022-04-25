/**
 * 获取字符串中连续出现最多的字符及次数
 */
interface IRes {
  char: string
  count: number
}
 
export function getMaxChar(str: string): IRes {
  let res: IRes = { char: '', count: 0 }
  const len = str.length
  if (!len) return res

  let count = 0
  let char = ''

  for (let i = 0; i < len; i++) {
    if (str[i] === char) {
      count++
    } else {
      if (count > res.count) {
        res = { char, count }
      }
      count = 1
      char = str[i]
    }
  }
  // 只有一个字符
  if (count > res.count) {
    res = { char, count }
  }

  return res
}
