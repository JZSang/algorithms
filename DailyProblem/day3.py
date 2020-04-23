"""
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
"""


def serialize(node):
    if node is None:
        return '#'
    return '{} {} {}'.format(node.val, serialize(node.left), serialize(node.right))


def deserialize(node):
    def helper():
        val = next(vals)
        if val == "#":
            return None
        new_node = Node(int(val))
        new_node.left = helper()
        new_node.right = helper()
        return new_node

    vals = iter(node.split())
    return helper()

class Node(object):
    def __init__(self, val):
        self.left = None
        self.right = None
        self.val = val
    
    def add_node(self, val):
        if not self.left:
            self.left = Node(val)
        elif not self.right:
            self.right = Node(val)
        else:
            self.left.add_node(val)
