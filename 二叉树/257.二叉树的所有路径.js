/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * Google Facebook Apple
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return []
  if (!root.left && !root.right) return [`${root.val}`]

  return [
    ...binaryTreePaths(root.left).map((x) => root.val + "->" + x),
    ...binaryTreePaths(root.right).map((x) => root.val + "->" + x),
  ]
}
// @lc code=end
