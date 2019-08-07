class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        window = {}
        start_w = 0
        end_w = 0
        result = 0
        while start_w < len(s) and end_w < len(s):
            if s[end_w] in window:
                del window[s[start_w]]
                start_w += 1
            else:
                window[s[end_w]] = True
                end_w += 1
                result = max(result,end_w - start_w)
            
            
        return result