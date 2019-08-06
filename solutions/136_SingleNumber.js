/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var dict = {}
    for(let i = 0;i<nums.length;i++){
        if(dict[nums[i]]){
            dict[nums[i]]++
        } else {
            dict[nums[i]] = 1
        }
    }
    if(nums.length == 0){
        return -1;
    }
    for(let key in dict){
        if(dict[key] == 1){
            return key
        }
    }
    return -1
};