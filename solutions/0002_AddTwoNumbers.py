# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        prev = None
        start = None
        carry = 0
        while l1 or l2:
            sum = 0
            if l1:
                sum = sum + l1.val
                l1 = l1.next
            if l2:
                sum = sum + l2.val
                l2 = l2.next
                
            new_node = ListNode((sum+carry) % 10)
            carry = (sum + carry) / 10
            if not start:
                start = new_node
            if prev:
                prev.next = new_node
            prev = new_node
            
        
        if carry != 0:
            new_node = ListNode(carry)
            prev.next = new_node
            
        return start