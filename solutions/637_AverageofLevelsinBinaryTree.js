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
var averageOfLevels = function(root) {
    let levels = [];
    let result = [];
    // Recursive solution + loop :
    // function helper(node, level){
    //     if(!node){
    //         return
    //     }
    //     if(!result[level]) { result[level] = []}
    //     if(node){
    //         result[level].push(node.val)
    //         helper(node.left, level+1)
    //         helper(node.right, level+ 1)
    //     }
    // }
    // helper(root,0)
    // for(let i=0;i<result.length;i++){
    //     let current_level = result[i]
    //     let sum = 0;
    //     let count = current_level.length > 0 ? current_level.length : 1;
    //     for(let j=0;j<current_level.length;j++){
    //         sum = sum + current_level[j];
    //     }
    //     result[i] = sum/count;
    // }
    let queue = [root];
    while(queue.length != 0){
        let size = queue.length;
        let sum = 0;
        for(let i = 0;i<size;i++){
            let node = queue.shift();
            sum = sum + node.val;
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        result.push(sum/size)
    }
    return result
};