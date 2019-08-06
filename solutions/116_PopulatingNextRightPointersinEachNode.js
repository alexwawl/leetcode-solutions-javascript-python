/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let start = root
    while(root && root.left){
        let next = root.left;
        while(root){
            root.left.next = root.right;
            if(root.next){
              root.right.next = root.next.left 
            } else {
                root.right.next = null
            }
            root = root.next
        }
        root = next;
    }
    return start
};