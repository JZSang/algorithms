/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head;
    let save = head;
    let prev = head;
    head = head.next;
    while (head) {
        while (head && head.val === prev.val) {
            prev.next = head.next;
            head = head.next;
        }
        if (!head) break;
        prev = head;
        head = head.next;
    }
    return save;
};