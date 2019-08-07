/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    var balance = 0;
    var result = 0;
    for(let i = 0;i<S.length;i++){
        if(S[i] === '('){
            balance = balance + 1;
        } else {
            balance = balance - 1;
        }
        // if we should add 
        if(balance == -1){
            result = result + 1;
            balance = balance + 1;
        }
    }
    return result+balance
};