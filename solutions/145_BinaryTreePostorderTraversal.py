# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def postorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        result = []
        #self.dfs_rec(root, result)
        
        # Do PreOrder traversal then reverse
        self.dfs_iter(root, result)
        result = reversed(result)
        return result
    
    def dfs_iter(self, root, result):
        if not root:
            return
        stack = [root]
        
        while stack:
            node = stack.pop()
            if node:
                stack.append(node.left)
                stack.append(node.right)
                result.append(node.val)
                
        
    def dfs_rec(self, root, result):
        if not root:
            return
        
        self.dfs_rec(root.left, result)
        self.dfs_rec(root.right, result)
        result.append(root.val)