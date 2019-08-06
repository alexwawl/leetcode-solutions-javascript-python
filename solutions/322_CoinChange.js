/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount<0){
        return 0
    }
    let count = new Array(amount).fill(0);
    function helper(coins, amount , count){
        if(amount < 0){return -1;}
        if(amount == 0){
            return 0;
        }
        if(count[amount-1] != 0){
            return count[amount-1]
        }
        
        let min = Number.POSITIVE_INFINITY;
        for(let i = 0;i<coins.length;i++){
            let coin = coins[i];
            let result = helper(coins,amount-coin,count)
            if(result >= 0 && result < min){
                min = 1 + result;
            }
        }
        count[amount-1] = (min ==  Number.POSITIVE_INFINITY) ? -1 : min;
        return count[amount-1]
    }
    return helper(coins, amount, count)
};