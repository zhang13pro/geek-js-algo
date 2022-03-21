/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 * google uber bloomberg
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
 * @param {number} k
 * @return {number}
 */
// 先序遍历得到有序数组
var kthSmallest = function (root, k) {
  let res = []
  function dfs(root) {
    if (res.length !== k) {
      if (root.left) dfs(root.left)
      res.push(root.val)
      if (root.right) dfs(root.right)
    }
  }
  dfs(root)

  return res[k - 1]
}
// @lc code=end
