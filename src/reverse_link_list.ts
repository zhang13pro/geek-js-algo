/**
 * 定义节点接口 
 */
interface ILinkListNode{
    value: number;
    next?: ILinkListNode;
}

// 反转单向链表
function reverseLinkList(head: ILinkListNode): ILinkListNode {
    if (!head || !head.next) {
        return head;
    }
    let pre = null;
    let cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}