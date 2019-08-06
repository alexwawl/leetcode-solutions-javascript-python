/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let count = 0;
    function dfs(grid,i,j){
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j]!='1'){
            return 0;
        } else {
            grid[i][j] = '#'
            return 1 + dfs(grid,i+1,j) + dfs(grid,i-1,j) + dfs(grid,i,j+1) + dfs(grid,i,j-1);
        }
        
    }
    for(let i = 0; i<grid.length;i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j]=='1'){
                let tmp_count = dfs(grid,i,j)
                count = Math.max(tmp_count,count)
            }
        }
    }
    return count
};