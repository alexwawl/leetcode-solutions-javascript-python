/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = new Array(s.length+1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
    for(let i = 2; i<=s.length;i++){
        let one_digit = parseInt(s.slice(i-1,i));
        let two_digit = parseInt(s.slice(i-2,i));
        if(one_digit >= 1){
            dp[i] = dp[i] + dp[i-1] 
        }
        if(two_digit >= 10 && two_digit <=26){
            dp[i] = dp[i]  + dp[i-2]
        }
    }
    return dp[dp.length-1]
};