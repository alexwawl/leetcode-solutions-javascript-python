/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    function helper(node, sum){
        if(!node){
            return false;
        }
        if(!node.left && !node.right && sum == node.val){
            return true
        }
        let left = helper(node.left, sum-node.val);
        let right = helper(node.right, sum-node.val);
        return left || right
    }
    let result = helper(root, sum);
    return result;
};