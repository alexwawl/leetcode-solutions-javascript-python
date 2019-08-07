/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    let sum = 0;
	let sorted_arr = nums.sort((a,b)=>{
		return a-b;
	})
	for(let i = 0; i<sorted_arr.length;i++){
        if(i-1>=0 && nums[i] == nums[i-1]){continue}
		let j = i+1;
		let k = sorted_arr.length-1;
		while(j<k){
			if(sorted_arr[i]+sorted_arr[j]+sorted_arr[k]===sum){
				result.push([sorted_arr[i],sorted_arr[j],sorted_arr[k]]);
				j++;
				while(j<k && sorted_arr[j]===sorted_arr[j-1]) { j++ }
			} else if(sorted_arr[i]+sorted_arr[j]+sorted_arr[k] < sum){
				j++;
			} else {
				k--;
			} 
		}
	}
	return result
    
};