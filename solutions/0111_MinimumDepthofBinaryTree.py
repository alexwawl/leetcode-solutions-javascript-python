# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        return self.min(root)
    
    def min(self, root):
        if not root:
            return 0
        if not root.left or not root.right:
            return max(self.min(root.left), self.min(root.right)) + 1
        if root:
            return min(self.min(root.left), self.min(root.right)) + 1
        