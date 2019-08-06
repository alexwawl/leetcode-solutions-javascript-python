/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let memo = {};
    if(N === 0){
        return 0;
    }
    if(N <= 2){
        return 1
    }
    function helper(n,memo){
        if(memo[n]){
            return memo[n]
        }
        if(n<=2){
            return 1
        }
        result = helper(n-1,memo) + helper(n-2,memo)
        memo[n] = result;
        return result
    }
    return helper(N,memo)
};