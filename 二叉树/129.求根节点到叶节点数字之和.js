/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @param {TreeNode} root
 * @return {number}
 */
function h(root, ratio) {
  if (!root) return 0
  let res = ratio * 10 + root.val
  if (!root.left && !root.right) return res

  return h(root.left, res) + h(root.right, res)
}

var sumNumbers = function (root) {
  return h(root, 0)
}
// @lc code=end
