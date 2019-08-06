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
var preorderTraversal = function(root) {
    let result = [];
    let stack = [root];
    while(stack.length > 0){
        let node = stack.pop();
        if(node){
            result.push(node.val);
            stack.push(node.right);
            stack.push(node.left);
        }
    }
    return result;
};