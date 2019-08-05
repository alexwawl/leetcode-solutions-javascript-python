class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        open = ['(','{','[']
        closed = [')','}',']']
        stack = []
        for char in s:
            if char in closed:
                open_bracket = stack.pop() if stack else '#'
                if open_bracket != open[closed.index(char)]:
                    return False
            else:
                stack.append(char)
        
        if len(stack) == 0:
            return True
        else:
            return False