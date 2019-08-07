class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result = []
        nums.sort()
        for first_index in xrange(len(nums)):
            if first_index - 1 >= 0 and nums[first_index] == nums[first_index-1]:
                continue
            start, end = first_index + 1, len(nums)-1
            while start < end :
                tmp_sum = nums[first_index] + nums[start] + nums[end] 
                
                if tmp_sum == 0:
                    result.append([nums[first_index], nums[start], nums[end]])
                    start += 1
                    end -= 1
                    while start < end and nums[start] == nums[start-1]:
                        start+=1
                    
                elif tmp_sum < 0:
                    start += 1
                else:
                    end -= 1
                    
        return result