/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// O（2^n）不可用
var climbStairs = function (n) {
  if (n <= 2) return n
  return climbStairs(n - 2) + climbStairs(n - 1)
}

// 缓存（记忆化搜索） 调用2n-1次
const map = {}
var climbStairs = function (n) {
  if (n <= 2) return n
  if (!map[n]) map[n] = climbStairs(n - 2) + climbStairs(n - 1)

  return map[n]
}

// dp 不占用栈（非递归）空间
var climbStairs = function (n) {
  let dp = [1, 2]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n - 1]
}
// @lc code=end
