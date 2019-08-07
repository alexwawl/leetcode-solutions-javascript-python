# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        def helper(node):
            if not node or not node.next:
                return node
            tmp = node.next
            node.next = helper(node.next.next)
            tmp.next = node
            return tmp
        return helper(head)