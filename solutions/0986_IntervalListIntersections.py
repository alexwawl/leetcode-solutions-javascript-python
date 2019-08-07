class Solution(object):
    def intervalIntersection(self, A, B):
        """
        :type A: List[List[int]]
        :type B: List[List[int]]
        :rtype: List[List[int]]
        """
        a_pointer = 0
        b_pointer = 0
        merged = []
        while a_pointer < len(A) and b_pointer < len(B):
            start = max(A[a_pointer][0], B[b_pointer][0])
            end = min(A[a_pointer][1],B[b_pointer][1])
            if start <= end:
                merged.append([start,end])
            if A[a_pointer][1] < B[b_pointer][1]:
                a_pointer +=1
            else:
                b_pointer +=1
        return merged