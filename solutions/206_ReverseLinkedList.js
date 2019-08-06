/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//recursive because of "Recursive Explore"
var reverseList = function(head) {
    if(!head){
        return head
    }
    let prev = null;
    let current = head;
    while(current != null){
        let next_tmp = current.next;
        current.next = prev;
        prev = current;
        current = next_tmp;
    }
    return prev
};