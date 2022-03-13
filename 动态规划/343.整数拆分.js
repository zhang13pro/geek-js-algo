/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 递归 不可用的算法
var integerBreak = function (n) {
  if (n == 2) return 1
  let result = -1
  for (var i = 1; i < n; i++) {
    result = Math.max(result, i * integerBreak(n - i), i * (n - i))
  }

  return result
}

// 缓存（记忆化搜索）
const map = {}
var integerBreak = function (n) {
  if (n == 2) return 1
  if (map[n]) return map[n]

  let result = -1
  for (var i = 1; i < n; i++) {
    result = Math.max(result, i * integerBreak(n - i), i * (n - i))
  }
  map[n] = result

  return result
}

// dp 自底向上 O(n^2)
// var integerBreak = function (n) {
//   let dp = { 1: 1 }
//   for (let i = 2; i <= n; i++) {
//     // 得到 dp[i]
//     for (let j = 1; j <= i - 1; j++) {
//       // j+(i-j)
//       dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i])
//     }
//   }

//   return dp[n]
// }

// @lc code=end
