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
var maxDepth = function(root) {
    function helper(head,acc){
        if(!head){
            return acc+0
        }
        if(!head.left && !head.right){
            return acc+1
        }
        return Math.max(helper(head.left, acc+1),helper(head.right,acc+1))
    }
    
    return helper(root,0)
};