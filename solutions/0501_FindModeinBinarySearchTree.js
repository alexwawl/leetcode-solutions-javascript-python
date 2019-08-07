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
var findMode = function(root) {
    let freq = {};
    if(!root){
        return []
    }
    function helper(root){
        if(root){
            helper(root.left)
            if(freq[root.val]){
                freq[root.val]++
            }else{
                freq[root.val]=1;
            }
            helper(root.right)
        }
    }
    helper(root);
    let sorted = []
    for(let key in freq){
        sorted.push([key,freq[key]])
    }
    sorted = sorted.sort((a,b)=>{
        return b[1]-a[1]
    });
    
    let most_freq = sorted[0][1];
    let result = []
    for(let i = 0;i<sorted.length;i++){
        if(sorted[i][1] < most_freq){
            break;
        }
        result.push(parseInt(sorted[i][0]))
    }
    
    return result
};