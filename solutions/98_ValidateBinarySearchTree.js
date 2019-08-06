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
var isValidBST = function(root) {
    function helper(root, lower_limit, upper_limit){
        if(!root){
            return true;
        }
        
        if(root.val <= lower_limit || root.val >= upper_limit){
            return false;
        }
        
        let left_side = helper(root.left,lower_limit,root.val) // elements from left subtree should be less than parent node
        if (!left_side){
            return false;
        }
        
        let right_side = helper(root.right,root.val,upper_limit) // elements from right subree should be greater than parent node
        if(!right_side){
            return false;
        }
        
        return true;
    }
    return helper(root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)
};