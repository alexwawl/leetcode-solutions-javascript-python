class Solution(object):
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        if len(matrix) == 0 or len(matrix[0])==0:
            return False
        return self.search(0,0,len(matrix)-1, len(matrix[0])-1, matrix, target)
    
    def search(self, x1, y1, x2, y2, matrix, target):
        if x2 < x1 or y2 < y1 or x1 >= len(matrix) or y1 >= len(matrix[0]) or x2 < 0 or y2 < 0:
            return False
        
        middle_x = x1 + (x2-x1) // 2
        middle_y = y1 + (y2-y1) // 2
        
        current = matrix[middle_x][middle_y]
        
        if current == target:
            return True
        elif current < target:
            return (self.search(x1, middle_y+1, x2, y2, matrix, target) or 
                        self.search(middle_x+1, y1, x2, middle_y, matrix, target))
        elif current > target:
            return (self.search(x1, y1, x2, middle_y-1, matrix, target) or 
                       self.search(x1, middle_y, middle_x-1, y2, matrix, target))
        else:
            return False