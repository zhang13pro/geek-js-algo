/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const queue: number[][] = []

  const b = (root: TreeNode | null, depth: number) => {
    if (!root) return
    queue[depth] ? queue[depth].push(root.val) : queue.push([root.val])

    b(root.left, depth + 1)
    b(root.right, depth + 1)
  }

  b(root, 0)

  return queue.map((v, i) => (i % 2 ? v.reverse() : v))
}
// @lc code=end
