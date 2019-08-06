/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    function helper(node, level){
        if(!result[level]){
            result[level] = []
        }
        if(node){
            result[level].push(node.val);
            for(let i = 0;i<node.children.length;i++){
                helper(node.children[i],level+1)
            }
        }
        
    }
    if(!root){
        return result
    }
    helper(root, 0)
    return result
};