/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function binarySearch(nums,target){
        let start = 0;
        let end = nums.length-1;
        while(start<end){
            var half = start + Math.floor((end-start)/2)
            if(nums[half]==target){
                return half;
            }
            if(nums[start] <= nums[half]){
                if(target >= nums[start] && target < nums[half]){
                    end = half - 1
                } else {
                    start = half + 1
                }
            } else {
                if(target > nums[half] && target <= nums[end]){
                    start = half+1
                } else {
                    end = half-1
                }
            }
        }
        return nums[start] == target ? start : -1;
    }
    
    return binarySearch(nums,target)
};