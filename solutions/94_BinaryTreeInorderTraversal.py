# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        result = []
        #self.helper(root, result)
        self.dfs_iter(root, result)
        return result
    
    def dfs_iter(self, root, result):
        if not root:
            return
        stack = []
        curr = root
        while stack or curr:
            while curr:
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            result.append(curr.val)
            curr = curr.right
                
        
        
    def helper(self, root, result):
        if root:
            self.helper(root.left, result)
            result.append(root.val)
            self.helper(root.right, result)