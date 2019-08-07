/**
 * @param {number} numRows
 * @return {number[][]}
 */

//Using recursion and memoization becuase of notes in task
var generate = function(numRows) {
    let result = [];
    let counter = 0;
    let memo = {}
    for(let i = 0; i<numRows;i++){
        result[i] = []
        for(let j=0;j<=i;j++){
            if(result[i][j]){
                result[i][j].push(0)
            } else {
                result[i][j] = [0]
            }
        }
    }
    function helper(i,j,memo){
        if(memo[i+':'+j]){
            return memo[i+':'+j]
        }
        if(i==j || j==1){
            return 1;
        }
        counter = counter + 1
        let result = helper(i-1,j-1,memo) + helper(i-1,j,memo)
        memo[i+':'+j] = result
        return result
    }
    for(let i = numRows-1;i>=0;i--){
        for(let j = i; j>=0;j--){
            result[i][j] = helper(i+1,j+1,memo)
        }
    }
    return result;
};