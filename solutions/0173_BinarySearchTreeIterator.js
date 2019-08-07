/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    function inorderTraversal(root){
        if(root){
            inorderTraversal(root.left)
            _ordered_nodes.push(root.val);
            inorderTraversal(root.right)
        }
    }
    let _ordered_nodes = [];
    inorderTraversal(root);
    this.ordered_nodes = _ordered_nodes;
    this.index = -1;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.index = this.index+1;
    return this.ordered_nodes[this.index]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index+1 < this.ordered_nodes.length
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */