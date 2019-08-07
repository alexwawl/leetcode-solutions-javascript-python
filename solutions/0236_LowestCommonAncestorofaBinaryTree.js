/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let result = [];
    function helper(node){
        if(!node){
            return false;
        }
        let left = helper(node.left);
        let right = helper(node.right);
        let middle = node == p || node == q;
        if(left + right + middle >= 2){
            result.push(node)
        }
        return left || right || middle
    }
    helper(root)
    return result[0];
};