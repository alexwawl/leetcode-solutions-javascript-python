/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var result = []
    function mergeSort(array){
        if(array.length < 2){
            return array;
        }
        var half = Math.floor(array.length/2);
        var left_side = mergeSort(array.slice(0,half));
        var right_side = mergeSort(array.slice(half))
        return merge(left_side, right_side);
    }
    function merge(left_side, right_side){
        let result = [];
        let l_pointer = 0;
        let r_pointer = 0;
        while(l_pointer < left_side.length && r_pointer < right_side.length){
            //desc order
            if(left_side[l_pointer] >= right_side[r_pointer]){
                result.push(left_side[l_pointer]);
                l_pointer++;
            } else {
                result.push(right_side[r_pointer]);
                r_pointer++;
            }
        }
        return result.concat(left_side.slice(l_pointer)).concat(right_side.slice(r_pointer));
    }
    
    result = mergeSort(nums)
    return result[k-1]
};