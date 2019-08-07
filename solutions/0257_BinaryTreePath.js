/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];
    if(!root){
        return []
    }
    function helper(root, current){
        if(!root.left && !root.right){
            result.push(current + root.val);
            return;
        }
        if(root.left){
            helper(root.left,current+root.val+'->')
        }
        if(root.right){
            helper(root.right,current+root.val+'->')
        }
       
    }
    helper(root,'');
    return result
};