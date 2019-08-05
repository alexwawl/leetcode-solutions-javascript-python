/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    function helper(current, open, closed){
        //because of pair.
        if(current.length == n*2){
            result.push(current);
            return;
        }
        if(open < n){
            helper(current+'(', open+1, closed)
        }
        if(closed<open){
            helper(current+')',open,closed+1)
        }
    }
    helper('',0,0)
    return result
};