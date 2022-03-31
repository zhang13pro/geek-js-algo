/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// Change to window    Use map save window status
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false
  const map = new Map()
  let start = 0,
    counter = 0,
    windowSize = s1.length

  for (const i of s1) map.set(i, map.get(i) + 1 || 1)
  counter = map.size

  for (let end = 0; end < s2.length; end++) {
    let char = s2[end]
    if (map.has(char)) map.set(char, map.get(char) - 1)
    if (map.get(char) === 0) counter--
    while (counter === 0) {
      if (end - start + 1 === windowSize) return true
      // just understand unclear
      if (map.has(s2[start])) map.set(s2[start], map.get(s2[start]) + 1)
      if (map.get(s2[start]) === 1) counter++
      start++
    }
  }

  return false
}
// @lc code=end
