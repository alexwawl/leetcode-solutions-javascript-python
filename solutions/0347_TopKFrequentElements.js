/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  
    let map = new Map();
    for(let i = 0;i<nums.length;i++){
        map.set(nums[i], map.get(nums[i]) + 1 || 1)
    }
    let element_array = [...map.entries()].sort((a,b)=>{
        return b[1] - a[1]
    });
    let result = [];
    for(let i = 0; i<k;i++){
        result.push(element_array[i][0])
    }
    return result
};