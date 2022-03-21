/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 * airbnb
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} num_arr
 * @return {TreeNode}
 */
// 其实就是中序变先序
var sortedArrayToBST = function (num_arr) {
  if (!num_arr.length) return null
  let mid_index = Math.floor(num_arr.length / 2)
  const root = new TreeNode(num_arr[mid_index])

  root.left = sortedArrayToBST(num_arr.slice(0, mid_index))
  root.right = sortedArrayToBST(num_arr.slice(mid_index + 1))

  return root
}
// @lc code=end
