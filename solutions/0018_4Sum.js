/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = [];
    nums = nums.sort((a,b)=>{
        return a-b;
    })
    
    function findThreeSum(nums, target){
        let dict = {}
        let result = [];
        for(let i = 0;i<nums.length;i++){
            if(i>=0 && nums[i] === nums[i-1]){
                continue
            }
            let l_pointer = i+1;
            let r_pointer = nums.length-1;
            while(l_pointer < r_pointer){
                if(nums[i] + nums[l_pointer] + nums[r_pointer] === target){
                    let tmp = [nums[i], nums[l_pointer], nums[r_pointer]]
                    result.push(tmp)
                    l_pointer++;
                    while(l_pointer < r_pointer && nums[l_pointer] === nums[l_pointer-1]){
                        l_pointer++
                    }
                } else if(nums[i] + nums[l_pointer] + nums[r_pointer] < target){
                    l_pointer++
                }
                if(nums[i] + nums[l_pointer] + nums[r_pointer] > target){
                    r_pointer--;
                }
                
            }
        }
        return result
    }
    
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === nums[i-1]){
            continue
        }
        let find_three = findThreeSum(nums.slice(i+1),target-nums[i])
        if(find_three.length > 0){
            for(let j = 0;j<find_three.length;j++){
                result.push([nums[i]].concat(find_three[j]))
            }
        }
    }
    return result;
};