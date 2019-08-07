/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    function helper(root,val){
        if(root){
            if(val < root.val){
                return helper(root.left,val)
            } else if (val> root.val){
                return helper(root.right,val)
            }
            return root ;
        }
    }
    let result = helper(root,val)
    return result != undefined ? result : null
};