/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 * facebook microsoft apple amazon linkedin
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// LCA 问题
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root
  let L = lowestCommonAncestor(root.left, p, q)
  let R = lowestCommonAncestor(root.right, p, q)

  return L && R ? root : L || R
}
// @lc code=end
