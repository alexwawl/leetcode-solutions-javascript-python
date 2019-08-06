/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let dict = {}
    for(let i = 0; i<nums.length;i++){
        if(dict[nums[i]]){
            return nums[i]
        } else {
            dict[nums[i]] = true
        }
    }
    return -1
};