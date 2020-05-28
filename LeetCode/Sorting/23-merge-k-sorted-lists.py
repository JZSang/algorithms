# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if not lists:
            return None

        def merge(list1, list2):
            if not list2:
                return list1
            head = ListNode(-1)
            node = head
            while list1 and list2:
                if list1.val < list2.val:
                    node.next = list1
                    list1 = list1.next
                else:
                    node.next = ListNode(list2.val)
                    list2 = list2.next
                node = node.next
            if list1:
                node.next = list1
            else:
                node.next = list2
            return head.next

        j = len(lists)
        while j > 1:
            i = 0
            while 2 * i < j:
                lists[i] = merge(lists[2*i], lists[2*i+1]
                                 if 2*i+1 < j else None)
                i += 1
            j = (j+1) // 2

        return lists[0]
