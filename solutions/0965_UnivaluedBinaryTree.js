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
var isUnivalTree = function(root) {
    let dict = {};
    
    function helper(root){
        if(Object.keys(dict).length > 1){
            return false
        }
        if(root){
            if(!dict[root.val]){
                dict[root.val] = true;
            }
            return helper(root.left) && helper(root.right);
        }
        return true
    }
    
    return helper(root)
};