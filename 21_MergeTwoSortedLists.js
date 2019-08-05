/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//Beats 99.94% results!
var mergeTwoLists = function(l1, l2) {
    function merge(l1,l2){
        if(!l1){
            return l2;
        }
        if(!l2){
            return l1;
        }
        if(l1.val<l2.val){
            l1.next = merge(l1.next, l2)
            return l1;
        } else {
            l2.next = merge(l1, l2.next)
            return l2;
        }
    }
    return merge(l1,l2)
};