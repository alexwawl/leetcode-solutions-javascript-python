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
var swapPairs = function(head) {
    function swap(head){
        if(!head || !head.next){
            return head;
        }
        let tmp = head.next;
        head.next = swap(head.next.next);
        tmp.next = head;
        return tmp;
    }
    return swap(head)
};