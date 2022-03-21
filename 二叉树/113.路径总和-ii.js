/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function (root, sum, res = [], path = []) {
  if (!root) return []
  path.push(root.val)
  if (!root.left && !root.right && sum === root.val) res.push([...path])
  pathSum(root.left, sum - root.val, res, path)
  pathSum(root.right, sum - root.val, res, path)
  path.pop()

  return res
}

// @lc code=end
