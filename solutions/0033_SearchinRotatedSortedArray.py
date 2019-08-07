class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        start = 0
        end = len(nums)-1
        if len(nums) < 1:
            return -1
        while(start < end):
            half = start + (end-start) // 2
            print(half)
            if nums[half] == target:
                return half
            if nums[start] <= nums[half]:
                if target >= nums[start] and target < nums[half]:
                    end = half - 1
                else :
                    start = half + 1 
            else :
                if target > nums[half] and target <= nums[end]:
                    start = half + 1
                else:
                    end = half - 1
        return  start if nums[start] == target else -1