/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let result = 0;
    let queens_attack_zones = {}; //key -> row:col, values: array attacking zones.
    // values -> can be dict of key is attacked coordinates, value = true;
    // O(1) for checking each zone without iterating
    function backtrack_nqueens(row, count){
        for(let i = 0; i < n; i++){
            // iterate all columns for given row
            // and check can we place queen in this row
            if(!is_under_attack(row, i)){
                place_queen(row, i); // put queen and mark her attacking zone
                
                //if we came to the end (array index starts from 0)
                if (row + 1 == n) {
                    count = count + 1;
                } else {
                    count = backtrack_nqueens(row+1, count);
                }    
            }
            remove_queen(row, i)
        }
        return count;
    }
    //NOT WORKING
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
    
    result = backtrack_nqueens(0, 0);
    return result;
};