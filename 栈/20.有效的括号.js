/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const reg1 = /\(\)/g
  const reg2 = /\[\]/g
  const reg3 = /\{\}/g

  while (s.includes("{}") || s.includes("[]") || s.includes("()")) {
    s = s.replace(reg1, "")
    s = s.replace(reg2, "")
    s = s.replace(reg3, "")
  }

  return s.length === 0
}
// @lc code=end
