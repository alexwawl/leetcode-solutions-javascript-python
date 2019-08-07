"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        result = []
        self.dfs_rec(root, result)
        return result
    
    def dfs_rec(self, root, result):
        if not root:
            return
        
        result.append(root.val)
        for child in root.children:
            self.dfs_rec(child,result)