/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // var result = [];
    var result = null;
    function helper(root){
        if(root.left){
            helper(root.left)
        }
        k = k-1;
        if(k == 0){
           result = root.val;
           return;
        }
        if(root.right){
            helper(root.right)
        }
    }
    helper(root)
    
//     function helper(root){
        
//         if(root.left){
//             helper(root.left)
//         }
//         result.push(root.val);
//         if(root.right){
//             helper(root.right)
//         }
//     }
//     helper(root)
//     return result[k-1]
    return result
};