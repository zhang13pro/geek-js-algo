/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }
  let pre = null
  let cur = head
  let next = null
  while (cur) {
    next = cur.next
    
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
// @lc code=end
