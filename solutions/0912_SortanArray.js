/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mergeSort(nums){
        if(nums.length <=1){
            return nums
        }
        let half = nums.length/2;
        let left_side = mergeSort(nums.slice(0,half))
        let right_side = mergeSort(nums.slice(half))
        return merge(left_side, right_side)
    }
    
    function merge(left,right){
        let lPointer = 0;
        let rPointer = 0;
        let result = [];
        while(lPointer < left.length && rPointer <right.length){
            if(left[lPointer]<right[rPointer]){
                result.push(left[lPointer])
                lPointer++;
            } else {
                result.push(right[rPointer]);
                rPointer++;
            }
        }
        
        return result.concat(left.slice(lPointer)).concat(right.slice(rPointer));
    }
    
    return mergeSort(nums);
};