/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    function dfs(root, L, R){
        if(!root){
            return 0
        } else if(!root.left && !root.right){
            if(root.val >= L && root.val<=R){
                return root.val
            } else {
                return 0
            }
        } else {
            if(root.val >= L && root.val <= R){
                return root.val + dfs(root.left, L, R) + dfs(root.right, L, R)
            } else {
                return 0 + dfs(root.left, L, R) + dfs(root.right, L, R)
            }
            
        }
    }
    return dfs(root, L, R)
};