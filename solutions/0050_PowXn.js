/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var memo = {}
    function pow(x,n,memo){
        if(memo[n]){
            return memo[n]
        }
        if(n === 0){
            return 1;
        };
        // x^6 = x^3 * x^3
        if(n % 2 === 0){
            let result = myPow(x,n/2);
            memo[n] = result;
            return result*result
        } else {
            //x^3 = x^1 * x^(3-1)
            let result = 0
            if(n>0){
                result = x * myPow(x,n-1) ;
            } else {
                result = 1/x*myPow(x,n+1)
            }
            memo[n] = result; 
            return result;
            
        }
    }
    return pow(x,n, memo)
};