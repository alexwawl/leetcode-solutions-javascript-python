class Solution(object):
    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
        memo = {}
        return self.helper(x,n, memo)
    
    def helper(self, x, n, memo):
        if n in memo:
            return memo[n]
        
        if n==0:
            return 1
        
        if n % 2 == 0:
            result = self.myPow(x, n // 2)
            memo[n] = result
            return result * result
        else:
            if n < 0:
                result = 1 / x * self.myPow(x, n + 1)
            else:
                result = x * self.myPow(x, n-1)
            memo[n] = result
            return result
        