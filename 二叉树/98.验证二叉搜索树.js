/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 * facebook microsoft amazon bloomberg
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
 * @return {boolean}
 */
var isValidBST = function (root, p = null, q = null) {
  if (!root) return true
  if (p && p.val <= root.val) return false
  if (q && q.val >= root.val) return false

  return isValidBST(root.left, root, q) && isValidBST(root.right, p, root)
}
// @lc code=end
