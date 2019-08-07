/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    function is_valid(board, i, j, number){
        let row = i - i%3; //get to the starting row 
        let col = j - j%3; //get column of particular 3*3 cube
        for(let k = 0; k<9;k++){
            if(board[i][k] == number || board[k][j] == number){
                return false
            }
        }
        for(let x=0; x<3; x++){
             for(let y=0; y<3; y++){
                 if(board[row+x][col+y]==number) return false;
             }
        }

        return true;
    }

    function backtrack(board, i, j){
       if(i==9){
            return true
       }
       if(j==9){
            return backtrack(board,i+1,0)
       }
       if(board[i][j] != '.'){
            return backtrack(board,i,j+1);
       }

       for(let number=1;number<10;number++){
            if(is_valid(board,i,j,number.toString())){
                board[i][j] = number.toString();
                if(backtrack(board,i,j+1)){
                    return true;
                }
            }
            board[i][j] = '.' //backtrack. remove previous change
       }
       return false
    }
    return backtrack(board,0,0)
};