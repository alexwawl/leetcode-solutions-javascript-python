/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function helper(board, i, j , word){
        if(word.length === 0 ){
            return true;
        }
        //check edge cases and
        // if all edge cases are okay than we check is first letter of the world exist in current 
        // board coordinate. word[0] != board[i][j]
        if(i<0 || i >= board.length || j < 0 || j>=board[0].length || word[0] != board[i][j]){
            return false
        }
        // if we are here that means that first letter is equal to current board letter
        // and we should move forware
        let tmp = board[i][j];
        //to avoid visiting same letters
        board[i][j] = '#';
        //check all neighborhoods. if some of them have valid path than return true else false;
        res = helper(board,i+1,j,word.slice(1)) || helper(board,i-1,j,word.slice(1)) ||
                helper(board,i,j+1, word.slice(1)) || helper(board,i,j-1,word.slice(1))
        // return visited value back. for allowing iterate from new coordiates if prev was bad
        board[i][j] = tmp
        return res;
        
    }
    //check for each letter do we have word. We can go up down left right;
    /*
        [
          ['A','B','C','E'],
          ['S','F','C','S'],
          ['A','D','E','E']
        ]
    
    */
    for(let i = 0;i<board.length;i++){
        for(let j =0;j<board[0].length;j++){
            if(helper(board, i, j, word)){
                return true;
            }
        }
    }
    return false;
};