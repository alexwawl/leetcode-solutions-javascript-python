/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
     let dict = {};
    let result = []
    for (let i = 0; i<nums1.length;i++){
        dict[nums1[i]] = true
    }
    
    for (let i = 0; i<nums2.length;i++){
        if(dict[nums2[i]]){
            result.push(nums2[i])
            dict[nums2[i]] = false;
        }
    }
    return result
};