/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * {} [] ()
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  for (const i of s) {
    if (i === "(") stack.push(")")
    else if (i === "{") stack.push("}")
    else if (i === "[") stack.push("]")
    else if (stack.length === 0 || i !== stack.pop()) return false
  }

  return stack.length === 0
}

// @lc code=end
