class Solution(object):
    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        result = []
        self.helper(candidates, 0, target, [], result)
        return result
    
    def helper(self,candidates, index, target, current, result):
        if target == 0:
            result.append(current[:])
            return
        if target < 0:
            return
        for i in range(index,len(candidates)):
            current.append(candidates[i])
            self.helper(candidates, i, target - candidates[i], current, result)
            current.pop()