/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_sum = nums[0];
    let temp_sum = 0;
    for(let i = 0; i<nums.length;i++){
        temp_sum = temp_sum + nums[i];
        max_sum = Math.max(max_sum,temp_sum)
        if(temp_sum < 0){
            temp_sum = 0
        }
    }
    return max_sum
};