class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if isinstance(nums,list) and len(nums)>1:
            hash = {}
            for i in range(len(nums)):
                diff = target-nums[i]
                if diff in hash:
                    return [hash.get(diff),i]
                hash[nums[i]] = i
        return []
                    
                    
        