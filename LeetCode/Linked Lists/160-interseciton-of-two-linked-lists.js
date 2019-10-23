/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null
    let stackA = [];
    let stackB = [];
    
    let saveA = headA;
    let saveB = headB;
    while (saveA) {
        stackA.push(saveA);
        saveA = saveA.next;
    }
    
    while (saveB) {
        stackB.push(saveB);
        saveB = saveB.next;
    }
    
    let prev = null;
    let j = stackB.length-1;
    let i = stackA.length-1
    while (i >= 0 && j >= 0 && stackA[i] === stackB[j]) {
        prev = stackA[i];
        i--;
        j--;
    }
    return prev;
};