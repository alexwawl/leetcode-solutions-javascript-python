# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def preorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        result = []
        self.dfs_rec(root, result)
        return result
    
    def dfs_rec(self, root, result):
        if not root:
            return
        
        result.append(root.val)
        self.dfs_rec(root.left, result)
        self.dfs_rec(root.right, result)