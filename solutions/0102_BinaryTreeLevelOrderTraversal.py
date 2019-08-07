# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        result = []
        #self.bfs_rec(root,0, result)
        self.bfs_iter(root,result)
        return result
        
    def bfs_rec(self, root, level, result):
        if not root:
            return;
        if level < len(result):
            result.append([])
        
        result[level].append(root.val)
        self.bfs_rec(root.left, level + 1, result)
        self.bfs_rec(root.right, level+1, result)
    
    def bfs_iter(self, root, result):
        if not root:
            return
        queue = [root]
        
        while queue:
            tmp = []
            for _ in range(len(queue)):
                node = queue.pop(0)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                tmp.append(node.val)
            result.append(tmp)
        