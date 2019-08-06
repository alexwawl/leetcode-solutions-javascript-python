/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function helper(root){
        if(!root){
            return 0;
        }
        
        let left = helper(root.left);
        let right = helper(root.right);
        if(left == -1 || right == -1 || Math.abs(left-right) > 1){
            return -1;
        }
        return 1 + Math.max(left,right)
    }
    return helper(root) != -1
};