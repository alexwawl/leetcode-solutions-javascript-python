/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    var length = grid[0].length;
    var height = grid.length;
    //checking edge cases
    if(length < 1 || height  < 1){
        return -1;
    }
    //closed exit
    if(grid[height-1][length-1] === 1){
        return -1;
    }
    //closed entrance
    if(grid[0][0] === 1){
        return -1;
    }
    // 1x1 matrix and open entrance than we need to do 1 step;
    if(length == 1 && height == 1 && grid[0][0] == 0){
        return 1;
    }
    
    
    //Breadth First Search (level by level)
    var queue = [[0,0]] // add first coordinates
    grid[0][0] = 1; //initialize as visited
    
    /*
        0,*,*,*,0,0...
        0,*,E,*,0,0...
        0,*,*,*,0,0,...
    
    */
    var adjacent_coordinates = [[0,1],[1,1],[1,0],[0,-1],[-1,0],[1,-1],[-1,1],[-1,-1]]
    while(queue.length!=0){
        let current_element = queue.shift() // LIFO for bfs;
        let curr_x = current_element[0];
        let curr_y = current_element[1];
        //check all adjacent (примыкающие)
        for(let i=0;i<adjacent_coordinates.length;i++){
            let adjacent = adjacent_coordinates[i]
            let adjacent_x = curr_x + adjacent[0];
            let adjacent_y = curr_y + adjacent[1];
            
            // came to boundaries and we can't exit
            if(adjacent_x < 0 || adjacent_x >= length){
                continue; 
            }
            if(adjacent_y < 0 || adjacent_y >= height){
                continue;
            }
            //if current element is a wall (1) or already visited. we can't go into wall.
            //
            if(grid[adjacent_x][adjacent_y] > 0){
                continue;
            }
            
            //try equal
            if(adjacent_x >= (length - 1) && adjacent_y >= (height - 1) &&  grid[adjacent_x][adjacent_y] == 0){
                return grid[curr_x][curr_y] + 1;
            }
            queue.push([adjacent_x,adjacent_y])
            grid[adjacent_x][adjacent_y] = grid[curr_x][curr_y] + 1;
        }
    }
    return -1 
};