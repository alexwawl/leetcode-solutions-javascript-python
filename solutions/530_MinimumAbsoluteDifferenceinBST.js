/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let result = [Number.POSITIVE_INFINITY];
    let prev = [Number.POSITIVE_INFINITY]
    function helper(root){
        if(root){
            helper(root.left);
            result[0] = Math.min(Math.abs(root.val-prev[0]), result[0]);
            prev[0] = root.val
            helper(root.right);
        }
    }
    helper(root)
    return result[0];
};