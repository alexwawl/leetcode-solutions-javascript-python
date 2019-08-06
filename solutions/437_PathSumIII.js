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
 * @return {number}
 */
var pathSum = function(root, sum) {
    if(!root){
        return 0
    }
    function helper(root, target){
        if(!root){
           return 0 ; 
        } else {
            return (target == root.val ?  1 : 0) + helper(root.left,target-root.val) + helper(root.right,target-root.val);
        }
    }
   
    return  helper(root,sum) + pathSum(root.left,sum) + pathSum(root.right,sum)
};