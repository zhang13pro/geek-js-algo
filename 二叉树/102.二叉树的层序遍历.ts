/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function levelOrder(root: TreeNode | null): number[][] {
  const queue: number[][] = []

  const b = (root: TreeNode, depth: number) => {
    if (!root) return

    queue[depth] ? queue[depth].push(root.val) : queue.push([root.val])

    root.left && b(root.left, depth + 1)
    root.right && b(root.right, depth + 1)
  }

  b(root, 0)
  return queue
}
// @lc code=end
