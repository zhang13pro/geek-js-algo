/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = {} // char:index 字典
  let res = 0
  for (var right, left = 0; right < s.length; right++) {
    let char = s[right]
    if (map[char]) left = left + 1

    map[char] = right
    res = Math.max(res, right - left + 1)
  }

  return res
}
// @lc code=end
// ['a', 'b', 'c', 'd', 'e', 'f']
