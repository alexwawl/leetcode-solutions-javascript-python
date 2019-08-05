/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // we should move from left and right . on each step calculate area.
    // and then set max_area as Math.max(max_area, current_area)
    // if right pointer is bigger or equal move left or move right.
    // current_area = min(height[left], height[right]) * (right-left)
    
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    while(left<right){
        let current_area = Math.min(height[left],height[right])*(right-left)
        result = Math.max(result, current_area)
        if(height[right] >= height[left]){
            left++
        } else {
            right--
        }
    }
    return result
};