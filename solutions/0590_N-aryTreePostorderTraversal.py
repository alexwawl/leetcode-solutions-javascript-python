"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def postorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        result = []
        #self.dfs_rec(root, result)
        
        # for iter method we should reverse result(post order)
        # for pre order(another task) we should reverse child on each step of extend stack
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
                result.append(node.val)
                for child in node.children:
                    stack.append(child)
    
    def dfs_rec(self, root, result):
        if not root:
            return
        
        for child in root.children:
            self.dfs_rec(child, result)
        
        result.append(root.val)