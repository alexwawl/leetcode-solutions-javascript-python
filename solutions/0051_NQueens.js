/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    let queens_attack_zones = {};
    
    function backtrack(row, result){
        for(let i = 0; i<n; i++){
           if(!is_under_attack(row, i)){
               place_queen(row, i);
               if(row+1 == n){
                   result.push(built_answer(queens_attack_zones))
               } else {
                   backtrack(row+1,result)
               }
           }
           remove_queen(row,i)
        }
        return;
    }
    
    function built_answer(queens_attack_zones){
        let answer = [];
        let queens = [];
        for(let key in queens_attack_zones){
            //key in row:col format;
            queens.push(key.split(":").map(a => {return parseInt(a)}))
        }
        for(let row = 0; row<n;row++){
            answer[row] = []
            for(let col = 0; col<n;col++){
                if(is_queen(queens,row,col)){
                    answer[row][col] = 'Q'
                } else {
                    answer[row][col] = '.'
                }
                
            }
            answer[row] = answer[row].join("")
        }
        
        return answer;
    }
    
    function is_queen(queens, row, col){
        for(let i = 0; i<queens.length;i++){
            if(queens[i][0] == row && queens[i][1] == col){
                return true;
            }
        }
        return false
    }
    
    function is_under_attack(row, col){
        // check all attacking zones if our row/col exist then true else false
        function isEqual(row,col, zones){
            for(let i = 0 ; i<zones.length;i++){
                let curr = zones[i]; // curr = [row, col]
                if(curr[0] == row && curr[1] == col){
                    return true;
                }
            }
            return false;
        }
        
        for (let key in queens_attack_zones){
            let current_zones =  queens_attack_zones[key]; // array of row/col under attack
            if(isEqual(row, col, current_zones)){
                return true;
            }
        }
        return false;
    }
    //Use dict instead of array to store attacking zone
    function place_queen(row, col){
        // mark attacking zones
        let zones = [];
        for(let i = 0; i<n;i++){
            zones.push([row,i]); // add | coordinates
            zones.push([i,col]); // add _ coordinates
        }
        // add \ coordinates
        let tmp_col = col;
        let tmp_row = row;
        while(tmp_row >= 0 && tmp_col >= 0){
            zones.push([tmp_row,tmp_col])
            tmp_row = tmp_row - 1
            tmp_col = tmp_col - 1;
        }
        tmp_col = col;
        tmp_row = row;
        while(tmp_row <= n && tmp_col <= n){
           zones.push([tmp_row,tmp_col])
           tmp_row = tmp_row + 1 ;
           tmp_col = tmp_col + 1;
        }
        
        // add / coordinates
        tmp_col = col;
        tmp_row = row;
        while(tmp_row >= 0 && tmp_col <= n){
            zones.push([tmp_row, tmp_col])
            tmp_row = tmp_row - 1;
            tmp_col = tmp_col + 1;
        }
        tmp_col = col;
        tmp_row = row;
        while(tmp_row <= n && tmp_col >= 0){
           zones.push([tmp_row,tmp_col])
           tmp_row = tmp_row + 1 ;
           tmp_col = tmp_col - 1;
        }
        //return zones
        queens_attack_zones[row+':'+col] = zones;
    }
    function remove_queen(row, col){
        // unmark attacking zones of current queen (row, col) as key
        delete queens_attack_zones[row+':'+col];
    }
    backtrack(0, result)
    return result;
};