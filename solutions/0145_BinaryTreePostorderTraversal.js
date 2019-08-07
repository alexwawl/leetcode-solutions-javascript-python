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
var postorderTraversal = function(root) {
    let stack = [root];
    let result = [];
    while(stack.length>0){
        let node = stack.pop();
        if(node){
            result.push(node.val);
            stack.push(node.left);
            stack.push(node.right);
        }
    }
    return result.reverse()
};