class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        result = []
        def helper(current, open, closed):
            if len(current) == n*2:
                result.append(current)
                return
            if open < n:
                helper(current+'(',open+1,closed)
            if open > closed:
                helper(current+')',open,closed+1)
        helper('',0,0)
        return result
        