class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        digits_map = {
            'I':1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000
        }
        sum = 0
        previous = 0
        for char in s[::-1]:
            current = digits_map[char]
            if(previous>current):
                sum = sum - current
            else:
                sum = sum + current
            previous = current
        return sum