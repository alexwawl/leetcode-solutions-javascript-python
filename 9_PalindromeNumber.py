class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        result = False
        left = 0
        right = len(str(x))-1
        x = str(x)
        while left < right:
            if x[left] != x[right]:
                return False
            left += 1
            right -= 1
            
        return True