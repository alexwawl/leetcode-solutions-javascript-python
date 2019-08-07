class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        start = 0
        end = len(height) - 1
        result = 0
        while start < end:
            area = (end-start) * min(height[start],height[end])
            
            if height[end] < height[start]:
                end -= 1
            else :
                start += 1
            
            result = max(result, area)
        return result