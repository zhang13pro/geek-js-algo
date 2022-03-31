/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * [""] ["a"]
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const s1 = strs[0]
  let start
  let max = ""
  let len = s1.length
  let fn = (item) => item.startsWith(start)

  for (let i = 0; i < len; i++) {
    start = s1.slice(0, i + 1)
    if (strs.every(fn)) max = start
    else return max
  }

  return max
}
// @lc code=end
