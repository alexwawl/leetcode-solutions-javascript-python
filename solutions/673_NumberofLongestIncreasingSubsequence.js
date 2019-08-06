/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let lengths = new Array(nums.length).fill(1);
    let counts = new Array(nums.length).fill(1);
    
    for(let i = 0;i<nums.length;i++){
        for(let j = 0;j<i;j++){
            //current bigger than prev
            if(nums[i]>nums[j]){
                // if  prev length >= current length but current number > prev number
                // it means that our longest length 
                // should be increased by prev biggest length + 1;
                if(lengths[j] >= lengths[i]){
                    lengths[i] = lengths[j] + 1;
                    counts[i] = counts[j]
                } else if (lengths[j] + 1 == lengths[i]){
                    counts[i] = counts[i] + counts[j]
                }
            }
        }
    }
    let max_length = Math.max(...lengths);
    let result = 0;
    for(let i = 0; i<lengths.length;i++){
        if(max_length == lengths[i]){
            result = result + counts[i]
        }
    }
    return result
};