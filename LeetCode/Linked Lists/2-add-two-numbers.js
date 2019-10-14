/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.


Time:
We loop through both lists to find its length. Then we loop through both lists until we reach the end of the
longest list or we reach longestlist.length + 1. That means we will have O(max(n,m)) where n,m is the length of thw
two lists

Space:
We create a list that can be at max length longestlist.length + 1. So it is also O(max(n,m)).

*/


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let longestLengthList = null;
    let one = 0;
    let two = 0;
    
    let l11 = l1;
    let l22 = l2;
    while (l11) {
        one++;
        l11 = l11.next;
    }
    while (l22) {
        two++;
        l22 = l22.next;
    }
    
    longestLengthList = one > two ? l1 : l2;
    let shortestLengthList = one > two ? l2 : l1;
    
    let carry = 0;
    let build = new ListNode((longestLengthList.val + shortestLengthList.val + carry) % 10);
    carry = Math.floor((longestLengthList.val + shortestLengthList.val + carry) / 10);
    
    let head = build;
    longestLengthList = longestLengthList.next;
        shortestLengthList = shortestLengthList.next;
    
    while (shortestLengthList) {
        let val = longestLengthList.val + shortestLengthList.val + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        build.next = new ListNode(val);
        longestLengthList = longestLengthList.next;
        shortestLengthList = shortestLengthList.next;
        build = build.next;
    }
    
    while (longestLengthList || carry) {
        let listVal = longestLengthList ? longestLengthList.val : 0;
        let val = listVal + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        build.next = new ListNode(val);
        build = build.next;
        longestLengthList ? longestLengthList = longestLengthList.next : null;
    }
    return head;
};