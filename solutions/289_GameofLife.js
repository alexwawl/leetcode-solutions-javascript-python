/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let rows = board.length;
    let cols = board[0].length;
    function initMatrix(rows,cols){
        let newMatrix = [];
        for(let i=0;i<rows;i++){
            newMatrix[i] = []
        }
        return newMatrix;
    }
    function getCurrentState(board,curr_i,curr_j){
        let start_i = curr_i-1 > 0 ? curr_i-1 : 0;
        let start_j = curr_j-1 > 0 ? curr_j-1:0;
        let end_i = curr_i+1 < board.length-1? curr_i+1 : board.length-1;
        let end_j = curr_j+1 < board[0].length-1? curr_j+1 : board[0].length-1;
        let neighbors_cnt = 0;
        for(let i = start_i; i<=end_i;i++){
            for(let j = start_j;j<=end_j;j++){
                if(board[i][j]==1){
                    neighbors_cnt++
                }
            }
        }
        let next_element = undefined;
        let current_element = board[curr_i][curr_j]
        if(current_element == 1){
            //because we can count ourself
            neighbors_cnt = neighbors_cnt -1;
            next_element = (neighbors_cnt > 3 || neighbors_cnt < 2) ? 0 : 1;
        } else {
            next_element = neighbors_cnt === 3 ? 1: current_element;
        }
       return next_element;
    }
    
    let new_matrix = initMatrix(rows,cols);
    for(let i = 0;i<rows;i++){
        for(let j =0;j<cols;j++){
            new_matrix[i][j] = getCurrentState(board,i,j);
        }
    }
    
    //copying new_matrix to board
    for(let i = 0;i<rows;i++){
        for(let j = 0;j<cols;j++){
            board[i][j] = new_matrix[i][j]
        }
    }
};