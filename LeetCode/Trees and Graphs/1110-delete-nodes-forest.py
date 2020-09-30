# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def delNodes(self, root: TreeNode, to_delete: List[int]) -> List[TreeNode]:
        if not root:
            return []
        if len(to_delete) <= 0:
            return [root]
        forest = []
        to_delete = set(to_delete)

        def deleteNodes(node):
            if not node:
                return

            deleteNodes(node.left)
            deleteNodes(node.right)
            if node.left and node.left.val in to_delete:
                node.left = None
            if node.right and node.right.val in to_delete:
                node.right = None
            if node.val in to_delete:
                if node.left:
                    forest.append(node.left)
                if node.right:
                    forest.append(node.right)

        deleteNodes(root)

        if root.val not in to_delete:
            forest.append(root)
        return forest

