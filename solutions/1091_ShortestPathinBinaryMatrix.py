class Solution(object):
    def shortestPathBinaryMatrix(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        length = len(grid[0])
        height = len(grid)
        
        if length < 1 or height < 1:
            return -1
        if grid[height-1][length-1] == 1:
            return -1
        if grid[0][0] == 1:
            return -1
        if length == 1 and height == 1 and grid[0][0]:
            return 1
        
        queue = [(0,0)]
        grid[0][0] = 1
        adjacents_coordinates = [[0,1],[1,1],[1,0],[0,-1],[-1,0],[1,-1],[-1,1],[-1,-1]]
        while queue:
            current = queue.pop(0)
            current_x  = current[0]
            current_y = current[1]
            for i in range(len(adjacents_coordinates)-1):
                adjacents = adjacents_coordinates[i]
                adjacents_x = current_x + adjacents[0]
                adjacents_y = current_y + adjacents[1]
                
                if adjacents_x < 0 or adjacents_x >= length:
                    continue
                
                if adjacents_y < 0 or adjacents_y >= height:
                    continue
                
                if grid[adjacents_x][adjacents_y] > 0:
                    continue
                
                if (adjacents_x >= length - 1 and \
                    adjacents_y >= height-1 and grid[adjacents_x][adjacents_y] == 0):
                    return grid[current_x][current_y]+1
                
                queue.append((adjacents_x,adjacents_y))
                
                grid[adjacents_x][adjacents_y] = grid[current_x][current_y]+1
                
        return -1