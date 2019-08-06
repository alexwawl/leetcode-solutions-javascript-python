# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        return self.helper(root)
    
    def helper(self, root, low = float('-inf'), up = float('inf')):
        if not root:
            return True
        
        if root.val <= low or root.val >= up:
            return False
        
        # left child.val should be less than root.val
        if not self.helper(root.left, low, root.val):
            return False
        
        # right child.val should be more than root.val
        if not self.helper(root.right, root.val, up):
            return False
        
        return True