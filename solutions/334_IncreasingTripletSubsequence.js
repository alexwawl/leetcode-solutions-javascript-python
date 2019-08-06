/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length < 3){
        return 0;
    }
    let first = Number.POSITIVE_INFINITY;
    let second = Number.POSITIVE_INFINITY;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] <= first){
            first = nums[i]
        } else if(nums[i]<=second){
            second = nums[i]
        } else {
            return true
        }
    }
    return false
};