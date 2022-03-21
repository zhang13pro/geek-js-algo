/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
// 包含 root 根节点
function findPath(root, num) {
  let res = 0
  if (!root) return 0
  if (root.val === num) res += 1
  res += findPath(root.left, num - root.val)
  res += findPath(root.right, num - root.val)

  return res
}

var pathSum = function (root, sum) {
  if (!root) return 0
  let res = findPath(root, sum)
  res += pathSum(root.left, sum)
  res += pathSum(root.right, sum)

  return res
}
// @lc code=end
