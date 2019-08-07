/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function helper(nums){
        if(nums.length == 0){
            return null
        }
        let half = Math.floor(nums.length / 2);
        let root = new TreeNode(nums[half])
        root.left = helper(nums.slice(0,half))
        //because we are using half as Value.
        root.right = helper(nums.slice(half+1))
        return root
    }
    return helper(nums)
};