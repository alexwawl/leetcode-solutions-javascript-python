/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    function helper(node1,node2){
        if(!node1){
            return node2;
        }
        if(!node2){
            return node1;
        }
        node1.val = node1.val + node2.val;
        node1.left = helper(node1.left,node2.left);
        node1.right = helper(node1.right, node2.right)
        return node1
    }
    return helper(t1,t2)
};