/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    function search(x1, y1, x2, y2){
        if(x2 < x1 || y2 < y1 || x1 >= matrix.length || y1 >= matrix[0].length || y2 < 0 || x2 < 0){
            return false;
        }
        let middle_x = Math.floor((x2-x1)/2) + x1;
        let middle_y = Math.floor((y2-y1)/2) + y1;
        let current = matrix[middle_x][middle_y];
        if(current == target){
            return true;
        } else if(current < target){
            //search in: whole down (+1 from middle WHY?) and right top (+1 from middle WHY?)
            return search(x1, middle_y+1, x2, y2) || // whole down
                   search(middle_x+1, y1, x2, middle_y) //
        } else if (current > target){
            //search in: whole up (+1 from middle WHY?) and left down (-1 from middle WHY?)
            return search(x1, y1, x2, middle_y-1) || // whole up
                    search(x1, middle_y, middle_x-1,y2)
        } else {
            return false;
        }
    }
    if(matrix.length === 0 || matrix[0].length === 0){
        return false
    }
    return search(0, 0 , matrix.length-1, matrix[0].length-1)
};