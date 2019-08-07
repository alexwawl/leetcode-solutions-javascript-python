class Solution(object):
    def findMin(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        l_pointer = 0
        r_pointer = len(nums)-1
        while l_pointer < r_pointer:
            half = l_pointer + (r_pointer - l_pointer) // 2
            if nums[half] > nums[r_pointer]:
                l_pointer = half + 1
            else:
                r_pointer = half
        
        return nums[l_pointer]