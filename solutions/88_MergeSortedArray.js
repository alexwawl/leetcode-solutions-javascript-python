/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let insert_pointer = m+n-1;
    let nums2_pointer = n-1;
    let nums1_pointer = m-1;
    while(nums1_pointer>=0 && nums2_pointer >=0){
        if(nums1[nums1_pointer]<nums2[nums2_pointer]){
            nums1[insert_pointer] = nums2[nums2_pointer];
            insert_pointer--;
            nums2_pointer--;
        } else {
            nums1[insert_pointer] = nums1[nums1_pointer];
            nums1_pointer--;
            insert_pointer--;
        }
    }
    while(nums2_pointer>=0){
        nums1[insert_pointer] = nums2[nums2_pointer];
        insert_pointer--;
        nums2_pointer--;
    }
};