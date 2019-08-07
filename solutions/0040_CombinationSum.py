class Solution(object):
    def combinationSum2(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        result = []
        candidates.sort()
        self.helper(candidates, target, [] , 0 , result)
        return result

    def helper(self, candidates, target, current, index, result):
        if target == 0:
            result.append(current[:])
            return
        if target < 0:
            return
        
        for i in range(index,len(candidates)):
            if candidates[i] != candidates[i-1] or i == index:
                current.append(candidates[i])
                self.helper(candidates, target-candidates[i], current, i+1, result)
                current.pop()