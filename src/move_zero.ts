/**
 * 移动0到数组末尾
 */
export function moveZeroToEnd(arr: number[]): number[] {
  let res = []
  const len = arr.length
  if (!len) return res

  let j = -1 // j at the position of 0

  for (let i = 0; i < len; i++) {
    if (arr[i] === 0 && j < 0) {
      j = i
    }

    if (arr[i] !== 0 && j >= 0) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      j++
    }
  }

  return arr
}
