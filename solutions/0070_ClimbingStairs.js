/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = {};
    let dp = [];
    //recursion with memoization
    function step(stairsCount, currentStair,memo){
        if(memo[currentStair]){
            return memo[currentStair]
        }
        if(currentStair > stairsCount){
            return 0;
        }
        if(currentStair === stairsCount){
            return 1;
        }
        let result = step(stairsCount, currentStair+1,memo) + step(stairsCount,currentStair+2,memo);
        memo[currentStair] = result;
        return result
        
    }
    
    return step(n,0,memo);
    
    //Dynamic Programming
    // if(n==1){
    //     return 1;
    // }
    // dp[0] = 1;
    // dp[1] = 1;
    // for(let i = 2; i<=n;i++){
    //     dp[i] = dp[i-1] + dp[i-2]
    // }
    // return dp[dp.length-1]
};