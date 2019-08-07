/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    function binarySearch(nums, target){
        let l_pointer = 0;
        let r_pointer = nums.length-1;
        while(l_pointer<r_pointer){
            let half = l_pointer + Math.floor((r_pointer-l_pointer)/2)
            if(nums[half] == target){
                return true;
            }
            
            while(l_pointer < half && nums[l_pointer] == nums[half]){
                l_pointer++
            }
           
            if(nums[l_pointer] <= nums[half]){
                if(target >= nums[l_pointer] && target < nums[half]){
                    r_pointer = half - 1
                    
                } else {
                    l_pointer = half + 1
                    
                }
            } else {
                if(target > nums[half] && target <= nums[r_pointer]){
                    l_pointer = half + 1;
                } else {
                    r_pointer = half -1
                }
            }
        }
        return nums[l_pointer] == target ? true : false
    }
    
    return binarySearch(nums,target)
};