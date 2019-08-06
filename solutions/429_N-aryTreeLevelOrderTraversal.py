"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def levelOrder(self, root):
        """
        :type root: Node
        :rtype: List[List[int]]
        """
        result = []
        self.bfs_iter(root, result)
        return result
    
    def bfs_iter(self, root, result):
        if not root:
            return
        
        queue = [root]
        
        while queue:
            tmp = []
            for _ in range(len(queue)):
                node = queue.pop(0)
                if node:
                    tmp.append(node.val)
                    for child in node.children:
                        queue.append(child)
            result.append(tmp)