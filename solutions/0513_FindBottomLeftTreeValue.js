/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let deepest_value = null;
    let queue = [root];
    while(queue.length != 0){
        let size = queue.length;
        for(let i = 0; i<size;i++){
            let node = queue.pop();
            if(i == 0){
                deepest_value = node.val
            }
            if(node.left){
                queue.unshift(node.left)
            }
            if(node.right){
                queue.unshift(node.right)
            }
        }
    }
    return deepest_value;
};