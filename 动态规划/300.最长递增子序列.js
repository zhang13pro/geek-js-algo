/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lengthOfLIS = function (arr) {
  let n = arr.length
  let array = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) array[i] = Math.max(array[i], array[j] + 1)
    }
  }

  return Math.max(...array)
}

// @lc code=end
