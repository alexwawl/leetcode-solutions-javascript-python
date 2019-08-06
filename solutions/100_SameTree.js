/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //Recursive solution
    // function helper(p, q){
    //     if(!p && !q){
    //         return true
    //     }
    //     if(!p || !q){
    //         return false
    //     }
    //     if(p.val != q.val){
    //         return false
    //     }
    //     return helper(p.left,q.left) && helper(p.right,q.right)
    // }
    // return helper(p,q)
    var queue = [[p,q]];
    function check(p,q){
        if(!p && !q){
                return true;
        }
        if(!p || !q){
            return false
        }
        if(p.val != q.val){
            return false
        }
        return true;
    }
    while(queue.length > 0){
        let [p, q] = queue.pop();
        if(!check(p,q)){
            return false;
        }
        if(p){
             queue.push([p.left, q.left]);
             queue.push([p.right, q.right]);
        }
    }
    return true;
};