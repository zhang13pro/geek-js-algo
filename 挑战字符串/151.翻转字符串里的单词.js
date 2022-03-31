/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 * "a good   example"
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(" ").filter((item) => item !== "")

  return arr.reverse().join(" ").trim()
}
// @lc code=end
