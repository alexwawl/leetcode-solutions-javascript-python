/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // check if each row is valid;
    // check if each col is valid;
    //check if each square is valid;
    
    function is_rows_valid(board){
        for(let i = 0; i<board.length;i++){
            if(!is_valid(board[i])){
                return false;
            }
        }
        return true;
    }
    function is_cols_valid(board){
        for(let i = 0;i<board.length;i++){
            let tmp = [];
            for(let j = 0; j<board[0].length; j++){
                tmp.push(board[j][i])
            }
            if(!is_valid(tmp)){
                return false
            }
        }
        return true
    }
    function is_valid(unit){
        let dict = {};
        let tmp = [];
        for(let i = 0;i<unit.length;i++){
            if(unit[i] != '.'){
                dict[unit[i]] = true;
                tmp.push(unit[i])
            }
        }
        return Object.keys(dict).length === tmp.length;
    }
    function is_squares_valid(board){
        // squares starts at 0, 3 6
        let squares_start = [0,3,6];
        for (let i = 0; i<squares_start.length;i++){
            for(let j = 0; j<squares_start.length;j++){
                let tmp = []
                for(let k = 0;k<3;k++){
                    for(let t = 0; t<3;t++){
                        tmp.push(board[squares_start[i]+k][squares_start[j]+t])
                    }
                }
                if(!is_valid(tmp)){
                    return false
                }
            }
        }
        return true
    }
    
    
    
    return is_rows_valid(board) && is_cols_valid(board) && is_squares_valid(board);
};