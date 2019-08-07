/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let dict = {0: 1};
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum  = sum + nums[i];
        if (dict[sum - k]) {
            count = count + dict[sum - k];
        }
        if(dict[sum]){
            dict[sum] = dict[sum] + 1
        } else {
            dict[sum] = 1
        }
    }
    
    return count;
};