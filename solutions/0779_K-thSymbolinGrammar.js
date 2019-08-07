/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    function helper(n,k){
        if(n===1){
            if(k===1){
                return 0;
            } else {
                return 1;
            }
        }
        let half = Math.pow(2,n-1);
        if(k<=half){
            return helper(n-1,k)
        } else {
            let result = helper(n-1, k-half)
            if(result == 0){
                return 1
            } else {
                return 0
            }
        }
    }
    return helper(N,K)
};