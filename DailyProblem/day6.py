"""

This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list.
Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node.
Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python),
you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.
"""
import ctypes

class Node(object):
    def __init__(self, val=0):
        self.val = val
        self.both = 0
    


class LinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None

        self.__nodes__ = []

    def add(self, node):

        if not self.head and not self.tail:
            self.head = self.tail = node
        else:
            self.tail.both = self.tail.both ^ id(node)
            node.both = id(self.tail)
            self.tail = node
        self.__nodes__.append(node)
    
    def get(self, index):
        if index == 0:
            return self.head
        current = _get_obj(self.head.both)
        prev = self.head
        while index > 1:
            index -= 1

            prev_id = id(prev)
            next_id = current.both ^ prev_id

            if next_id:
                prev = current
                current = _get_obj(next_id)
            else:
                raise IndexError("no")

        return current


def _get_obj(id):
    return ctypes.cast(id, ctypes.py_object).value


def main():
    linked_list = LinkedList()
    linked_list.add(Node(1))
    linked_list.add(Node(2))
    linked_list.add(Node(3))
    linked_list.add(Node(4))
    linked_list.add(Node(2049))
    linked_list.add(Node(2))
    linked_list.add(Node(2))
    print(linked_list.get(0).val)
    print(linked_list.get(3).val)


if __name__ == "__main__":
    main()