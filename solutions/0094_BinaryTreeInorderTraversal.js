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
var inorderTraversal = function(root) {
    let result = [];
    // let stack = [];
    // while(stack.length>0 || root){
    //     if(root){
    //         stack.push(root)
    //         root = root.left;
    //     } else {
    //         let tmpNode = stack.pop();
    //         result.push(tmpNode.val);
    //         root = tmpNode.right;
    //     }
    // }
    
    // try to do recursivly 
    function helper(root){
        if(root){
            helper(root.left)
            result.push(root.val)
            helper(root.right)
        }
    }
    
    helper(root)
    return result
};