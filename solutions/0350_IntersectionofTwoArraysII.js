/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let dict = {};
    let result = [];
    for (let i = 0; i<nums1.length;i++){
        dict[nums1[i]] = dict[nums1[i]] ? ++dict[nums1[i]] : 1
    }
    
    for (let i = 0; i<nums2.length;i++){
        if(dict[nums2[i]] && dict[nums2[i]] > 0){
            result.push(nums2[i]);
            dict[nums2[i]]--;
        }
    }
    return result
};