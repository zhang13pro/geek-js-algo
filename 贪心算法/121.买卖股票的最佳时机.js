/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 超时 O(n^2) 也不行
var maxProfit = function (prices) {
  let max = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] > prices[i]) max = Math.max(max, prices[j] - prices[i])
    }
  }

  return max
}

var maxProfit = function (prices) {
  let max = 0
  let min = prices[0]
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i]
    else if (prices[i] - min > max) max = prices[i] - min
  }

  return max
}

// @lc code=end
