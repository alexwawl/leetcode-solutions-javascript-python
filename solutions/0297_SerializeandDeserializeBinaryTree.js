/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result = []
    function helper(root){
        if(!root){
            result.push("#")
        } else {
            result.push(root.val);
            helper(root.left)
            helper(root.right)
        }
    }
    helper(root)
    return result.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = data.split(',');
    var index = 0;
    function helper(arr){
        if(arr[index] == '#' || index > arr.length){
            return null;
        }
        let root = new TreeNode(parseInt(arr[index]));
        index = index + 1;
        root.left = helper(arr);
        index = index + 1;
        root.right = helper(arr)
        return root
    }
    return helper(arr)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */