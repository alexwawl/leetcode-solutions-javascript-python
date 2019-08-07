/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let head1 = headA;
    let head2 = headB;
    let result = null;
    
    let count1 = getCount(head1);
    let count2 = getCount(head2);
    if(count1<count2){
        let diff = count2-count1;
        result = getIntersectionPoint(diff, head2, head1);
    } else{
        let diff = count1 - count2;
        result = getIntersectionPoint(diff, head1, head2);
    }
    
    function getIntersectionPoint(diff, bigger, smaller){
        let current1 = bigger;
        let current2 = smaller;
        for(let i = 0; i<diff;i++){
            if(!current1){
                return null;
            }
            current1 = current1.next;
        }
        while(current1 && current2){
            if(current1 === current2){
                return current1
            }
            current1 = current1.next;
            current2 = current2.next;
        }
        
        return null;
    }
    
    
    function getCount(head){
        let count = 0;
        let curr = head;
        while(curr){
            count = count+1;
            curr = curr.next;
        }
        return count;
    }
    return result;
};