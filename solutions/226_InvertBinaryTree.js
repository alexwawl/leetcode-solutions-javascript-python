/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function helper(node){
        if(node){
            let new_node = new TreeNode(node.val)
            new_node.left = helper(node.right)
            new_node.right = helper(node.left)
            return new_node
        } else {
            return null
        }
    }
    return helper(root)
};