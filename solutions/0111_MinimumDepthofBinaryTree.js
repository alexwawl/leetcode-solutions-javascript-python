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
var minDepth = function(root) {
    function dfs(root, count){
        if(!root){
            return 0;
        }
        if(!root.left || !root.right){
            return Math.max(dfs(root.left, count+1),dfs(root.right, count+1)) + 1
        }
        if(root){
            return Math.min(dfs(root.left, count+1),dfs(root.right, count+1)) + 1
        }
    }
    return dfs(root, 0);
};