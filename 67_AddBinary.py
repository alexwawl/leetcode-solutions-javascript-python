class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        a_pointer = len(a)-1
        b_pointer = len(b)-1
        result = []
        carry = 0
        while(a_pointer >= 0 or b_pointer >= 0):
            sum = carry
            if a_pointer >= 0:
                try:
                    sum = sum + int(a[a_pointer])
                    a_pointer -= 1
                except ValueError:
                    print("invalid integer")
                    
            if b_pointer >= 0:
                try:
                    sum = sum + int(b[b_pointer])
                    b_pointer -= 1
                except ValueError:
                    print("invalid integer")
            
            result.append(sum % 2)
            carry = sum // 2
            
        
        if(carry != 0):
            result.append(carry)
        return ''.join(str(x) for x in result[::-1])
        