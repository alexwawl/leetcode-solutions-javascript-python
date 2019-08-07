/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // so okay, we should go from top to bottom, from left to write.
    // until our queue is full get data from it and put it to result. (add data to queue from right to left)
    // when queue is empty add childs from roots
    var result = []
    function helper(node,level){
        if(!node) { 
            return;
        }
        if(!result[level]) {
            result[level] = []
        }
        result[level].push(node.val);
        helper(node.left,level+1);
        helper(node.right,level+1);
    }
    helper(root,0)
    return result;
};