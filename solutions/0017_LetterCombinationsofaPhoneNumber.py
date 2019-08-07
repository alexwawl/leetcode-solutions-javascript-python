class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        if len(digits) < 1:
            return []
        
        letters_dict = {
            '2': ['a','b','c'],
            '3': ['d','e','f'],
            '4': ['g','h','i'],
            '5': ['j','k','l'],
            '6': ['m','n','o'],
            '7': ['p','q','r','s'],
            '8': ['t','u','v'],
            '9': ['w','x','y','z']
        }
        result = []
        def helper(current):
            if len(current) == len(digits):
                result.append(current)
                return
            
            current_chars = letters_dict.get(digits[len(current)],[])
            
            for char in current_chars:
                helper(current+char)
        
        helper('')
        return result