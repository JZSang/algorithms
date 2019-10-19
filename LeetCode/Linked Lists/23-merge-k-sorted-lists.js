/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let length = lists.length;
    
    let interval = 1;
    while (interval < length) {
        for (let i = 0; i < length; i += interval * 2) {
            lists[i] = mergeTwoLists(lists[i], lists[i+interval])
        }
        interval *= 2;
    }
    
    return length > 0 ? lists[0] : null;
    
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode(" ");
    let ptr = list;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            list.next = l1;
            l1 = l1.next;
            list = list.next;
        } else {
            list.next = l2;
            l2 = l2.next;
            list = list.next;
        }
    }
    if (l1) {
        list.next = l1;
    } else {
        list.next = l2
    }
    return ptr.next;
};