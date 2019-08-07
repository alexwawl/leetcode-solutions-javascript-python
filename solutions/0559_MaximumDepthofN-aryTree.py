"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def maxDepth(self, root):
        """
        :type root: Node
        :rtype: int
        """
        return self.dfs(root, 0)
    
    def dfs(self,root,accum):
        if not root:
            return accum
        if not root.children:
            return accum+1
        
        tmp = [0]
        
        for child in root.children:
            tmp.append(self.dfs(child, accum+1))
        return max(*tmp)