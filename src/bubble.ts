export function bubble(num: number[]): number[] {
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) continue
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] > 0 && num[i] > num[j]) {
        let temp = num[i]
        num[i] = num[j]
        num[j] = temp
      }
    }
  }
  return num
}
