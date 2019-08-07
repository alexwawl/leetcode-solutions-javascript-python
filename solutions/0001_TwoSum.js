/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {};
	let result = [];
	for(let i = 0; i < nums.length; i++){
		let key = target - nums[i];
		if(key in dict){
			return [dict[key],i]
		}
		dict[nums[i]] = i; 
	}
	return result
};