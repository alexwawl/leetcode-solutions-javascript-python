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
var isSymmetric = function(root) {
    function helper(left, right){
        if(!left && !right){
            return true
        }
        if(!left || !right){
            return false
        }
        if(left.val == right.val){
            let n_left = helper(left.left, right.right)
            let n_right = helper(left.right, right.left)
            return n_left && n_right
        } else {
            return false
        }
    }
    if(!root){
        return true
    }
    return helper(root.left,root.right)
};