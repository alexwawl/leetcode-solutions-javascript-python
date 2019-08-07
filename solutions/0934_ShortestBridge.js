/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
    let queue = []
    function dfs(board, i, j){
        if(i<0 || i>=board.length || j < 0 || j >= board[0].length || board[i][j]!=1){
            return;
        }
        //mark 1 island as visited
        board[i][j]="#";
        // add each point of current island for future searching.
        queue.push([i,j])
        dfs(board,i+1,j);
        dfs(board,i-1,j);
        dfs(board,i,j+1);
        dfs(board,i,j-1);
    }
    
    let found = false;
    for(let i=0;i<A.length;i++){
        if(found){
            break;
        }
        for(let j=0;j<A[0].length;j++){
            if(A[i][j]==1){
                dfs(A,i,j)
                found = true;
                break;
            }
        }
    }
    let bridge_count = 0;
    let rows = A.length;
    let cols = A[0].length;
    while(queue.length != 0){
        let size = queue.length;
        // from each point of first island try to find shortest path to another island
        for(let i = 0; i<size; i++){
            let current = queue.shift();
            let curr_i = current[0];
            let curr_j = current[1];
            
            //if we find bounderies for second island  -> return bridge count;
            if(curr_i > 0 && A[curr_i-1][curr_j] == 1 ||
              curr_i < rows-1 && A[curr_i+1][curr_j] == 1 ||
              curr_j > 0 && A[curr_i][curr_j-1] == 1 ||
              curr_j < cols-1 && A[curr_i][curr_j+1] == 1){
                return bridge_count;
            }
            
            // else mark all zeros as visited
            if(curr_i > 0 && A[curr_i-1][curr_j]==0){
                // Mark as visited and try to find from this coordinate on the next step;
                queue.push([curr_i-1,curr_j])
                A[curr_i-1][curr_j] = "#"
            }
            if(curr_i < rows-1 && A[curr_i+1][curr_j]==0){
                // Mark as visited and try to find from this coordinate on the next step;
                queue.push([curr_i+1,curr_j])
                A[curr_i+1][curr_j] = "#"
            }
            if(curr_j > 0 && A[curr_i][curr_j-1]==0){
                // Mark as visited and try to find from this coordinate on the next step;
                queue.push([curr_i,curr_j-1])
                A[curr_i][curr_j-1] = '#'
            }
            if(curr_j < cols-1 && A[curr_i][curr_j+1]==0){
                // Mark as visited and try to find from this coordinate on the next step;
                queue.push([curr_i,curr_j+1])
                A[curr_i][curr_j+1] = '#'
            }
        }
        //if we can't find another island, built 1 bridge and continue
        bridge_count++;
    } 
    return bridge_count
};