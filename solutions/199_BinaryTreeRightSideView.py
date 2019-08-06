# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def rightSideView(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        max_level = [0]
        result = []
        self.helper(root, max_level, 1, result)
        return result
        
    def helper(self, root, max_level, current_level, result):
        if root:
            if max_level[0] < current_level:
                result.append(root.val)
                max_level[0] = current_level
            
            self.helper(root.right, max_level, current_level+1, result)
            self.helper(root.left, max_level, current_level+1, result)
                        