/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
   var result = [];
	function helper(input, size){
		if(size === 1){
			result.push(input.slice(0)) // push copy of array
			return;
		}
		for(let i = 0; i<size;i++){
			helper(input, size-1);
			if(size % 2 != 0){
				[input[0], input[size-1]] = [input[size-1], input[0]]
			} else {
				[input[i], input[size-1]] = [input[size-1], input[i]]
			}
		}
	}
	helper(nums,nums.length)
	return result;
};