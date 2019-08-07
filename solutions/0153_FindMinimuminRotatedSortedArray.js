/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l_pointer = 0;
    let r_pointer = nums.length-1;
    while(l_pointer < r_pointer){
        let half = l_pointer + Math.floor((r_pointer-l_pointer)/2)
        if(nums[half] > nums[r_pointer]){
            l_pointer = half + 1  
        } else {
            r_pointer = half
        }
    }
    return nums[l_pointer]
};