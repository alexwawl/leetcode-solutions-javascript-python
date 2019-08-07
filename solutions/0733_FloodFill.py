class Solution(object):
    def floodFill(self, image, sr, sc, newColor):
        """
        :type image: List[List[int]]
        :type sr: int
        :type sc: int
        :type newColor: int
        :rtype: List[List[int]]
        """
        def helper(i,j, target, newColor):
            if i< 0 or i >= len(image) or j < 0 or j >= len(image[0]):
                return

            if image[i][j] != target or image[i][j] == newColor:
                return
            else:
                image[i][j] = newColor
                helper(i+1,j,target,newColor)
                helper(i-1,j,target,newColor)
                helper(i,j+1,target,newColor)
                helper(i,j-1,target,newColor)
                
        helper(sr,sc,image[sr][sc],newColor)
        return image