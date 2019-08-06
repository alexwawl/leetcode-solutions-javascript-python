class Solution(object):
    def decodeString(self, s):
        """
        :type s: str
        :rtype: str
        """
        if len(s) < 1:
            return ''
        pointer = 0
        nums = '0123456789'
        result = ''
        times = 1
        
        while pointer < len(s):
            if s[pointer] in nums:
                times = int(s[pointer])
                start = pointer
                pointer += 1
                while pointer < len(s) and s[pointer] in nums :
                    times = int(s[start:pointer+1])
                    pointer +=1
            else:
                if s[pointer] == '[':
                    stack = [s[pointer]]
                    start = pointer + 1
                    pointer += 1
                    while len(stack) > 0:
                        if s[pointer] == '[':
                            stack.append(s[pointer])
                        if s[pointer] == ']':
                            stack.pop()
                        pointer += 1
                    result = result + self.decodeString(s[start:pointer-1]) * times
                    times = 1
                else:
                    result = result + s[pointer]
                    pointer += 1
        
        return result