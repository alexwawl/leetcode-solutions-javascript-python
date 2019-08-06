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
var levelOrderBottom = function(root) {
    var result = [];
    var queue = [root];
    if(!root){
        return []
    }
    while(queue.length != 0){
        let size = queue.length;
        let tmp = []
        for(let i = 0;i<size;i++){
            let node = queue.shift();
            tmp.push(node.val);
            if(node.left){queue.push(node.left)}
            if(node.right){queue.push(node.right)}
        }
        result.push(tmp)
    }
    return result.reverse()
};