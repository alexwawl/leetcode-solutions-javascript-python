/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let start = 0;
    let nums = (x + '').split('');
    let end = nums.length-1;
    let sign = '+';
    while(start<end){
        let tmp = nums[start];
        nums[start] = nums[end];
        nums[end] = tmp;
        start++;
        end--;
    }
    if(!parseInt(nums[nums.length-1])){
        sign = nums[nums.length-1]
    }
    let result = parseInt(sign+nums.join(''))
    if(Math.abs(result) > Math.pow(2,31)-1){
        return 0 
    } else {
        return  result
    }

};