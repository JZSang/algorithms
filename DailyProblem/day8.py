"""
This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   1\3
    / \
   1\2 1
  / 
 1   
"""

class Node(object):
    def __init__(self, val=0):
        self.left = None
        self.right = None
        self.val = val

    def add_left(self, node):
        self.left = node

    def add_right(self, node):
        self.right = node
        

counter = 0

def main(node):
    def traverse(node, curr):
        global counter
        if node is None:
            return True
        above_node_fail = False
        if node.val != curr:
            curr = node.val
            above_node_fail = True
        left = traverse(node.left, curr)
        right = traverse(node.right, curr)
        if left and right:
            counter = counter + 1
        return not above_node_fail and left and right

    traverse(node, node.val)
    return counter
        

if __name__ == "__main__":

    node = Node(5)
    node2 = Node(1)
    node2.add_left(Node(5))
    node2.add_right(Node(5))
    node.add_left(node2)

    node3 = Node(5)
    node3.add_right(Node(5))
    node.add_right(node3)

    print(main(node))