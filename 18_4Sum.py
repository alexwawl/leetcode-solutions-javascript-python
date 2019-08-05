class Solution(object):
    def fourSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        nums.sort()
        result = []
        def three_sum_helper(nums, target):
            result = []
            for index in range(len(nums)):
                
                if index>=1 and nums[index] == nums[index-1]:
                    continue
                    
                start = index+1
                end = len(nums)-1
                
                while start < end:
                    if nums[index] + nums[start] + nums[end] == target:
                        result.append([nums[index], nums[start], nums[end]])
                        start += 1
                        while start < end and nums[start] == nums[start-1]:
                            start += 1
                    elif nums[index] + nums[start] + nums[end]  < target:
                        start += 1
                    else:
                        end -= 1
            return result
        
        for i in range(len(nums)):
            if i>=1 and nums[i] == nums[i-1]:
                continue
            
            three_sum = three_sum_helper(nums[i+1:], target - nums[i])
            if len(three_sum) > 0:
                for item in three_sum:
                    result.append([nums[i]] + item)
        
        return result