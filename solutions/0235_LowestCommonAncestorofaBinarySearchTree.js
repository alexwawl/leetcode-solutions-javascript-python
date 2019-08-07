/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let parent_value = root.val;
    let p_value = p.val;
    let q_value = q.val;
    if(p_value > parent_value && q_value > parent_value){
        return lowestCommonAncestor(root.right,p,q)
    } else if(p_value < parent_value && q_value < parent_value){
        return lowestCommonAncestor(root.left,p,q)
    } else{
        return root
    }
     
};