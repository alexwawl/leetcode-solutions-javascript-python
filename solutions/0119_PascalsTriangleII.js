/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1];
    if(rowIndex === 0){
        return result
    }
    function helper(rowIndex,prev){
        if(rowIndex === prev.length){
            return prev
        }

        let tmp = [];
        for(let i = 0; i<=prev.length;i++){
            if(i==0 || i==prev.length){
                tmp[i] = 1
            } else {
                tmp[i] = prev[i] + prev[i-1]
            }
        }

        return helper(rowIndex,tmp)
    }
    
    result = helper(rowIndex+1,result)

    return result;
};