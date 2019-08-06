# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        return self.dfs_max(root,0)
    
    def dfs_max(self, root, accum):
        if not root:
            return accum
        if not root.left and not root.right:
            return accum+1
        return max(self.dfs_max(root.left,accum+1), self.dfs_max(root.right, accum+1))