/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    var result = []
    function helper(node){
        if(node){
            for(let i = 0; i<node.children.length;i++){
                helper(node.children[i]);
            }
            result.push(node.val)
        }
    }
    helper(root)
    return result
};