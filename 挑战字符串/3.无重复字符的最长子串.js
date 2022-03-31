/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * ['a', 'b', 'c', 'd', 'e', 'f']
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let res = 0,
    max = 0,
    l = 0,
    r = 0
  const len = s.length

  for (let i = 0; i < len; i++) {
    while (set.has(s[i])) set.delete(s[l++])
    set.add(s[i])
    max = r - l + 1
    r++
    res = max > res ? max : res
  }

  return res
}
// @lc code=end
