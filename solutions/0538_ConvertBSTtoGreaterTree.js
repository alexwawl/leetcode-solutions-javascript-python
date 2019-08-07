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
var convertBST = function(root) {
    let sum = 0;
    function helper(node){
        if(node){
            helper(node.right);
            sum = sum + node.val;
            node.val = sum;
            helper(node.left)
        }
    }
    helper(root)
    return root;
};