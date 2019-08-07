/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var result = [];
    var max_level = [0]
    function helper(root, current_level, max_level){
        if(root){
            if(max_level[0] < current_level){
                result.push(root.val);
                max_level[0] = current_level
            }
            
            // if right view : right -> left
            // if left view : left -> right
            helper(root.right,  current_level + 1, max_level)
            helper(root.left,   current_level + 1, max_level)
        }
        
    }
    helper(root,1,max_level);
    return result
};