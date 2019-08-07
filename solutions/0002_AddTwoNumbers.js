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
var addTwoNumbers = function(l1, l2) {
    let l1_pointer = l1;
    let l2_pointer = l2;
    let carry = 0;
    let prev = null;
    let start = null;
    while(l1_pointer || l2_pointer){
        let sum = carry;
        let new_node = new ListNode();
        if(!start){
            start = new_node
        }
        if(prev){
            prev.next = new_node;
        }
        if(l1_pointer){
            sum = sum + l1_pointer.val;
            l1_pointer = l1_pointer.next;
        }
        if(l2_pointer){
            sum = sum+l2_pointer.val;
            l2_pointer = l2_pointer.next;
        }
        new_node.val = sum % 10;
        prev = new_node;
        carry = Math.floor(sum / 10)
    }
    if(carry){
        let new_node = new ListNode();
        if(prev){
            prev.next = new_node;
        }
        new_node.val = carry;
    }
    return start
};