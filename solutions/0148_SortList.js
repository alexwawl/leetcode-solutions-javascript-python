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
var sortList = function(head) {
    function mergeSort(node){
        if(!node || !node.next){
            return node;
        }
        let middle = getMiddle(node);
        let next_to_middle = middle.next;
        //divide in the middle;
        middle.next = null;
        let left = mergeSort(node)
        let right = mergeSort(next_to_middle);
        let merged_list = merge(left,right);
        return merged_list;
    }
    function merge(left,right){
        let result = null
        if(!left){
            return right;
        }
        if(!right){
            return left;
        }
        if(left.val<=right.val){
            result = new ListNode(left.val);
            result.next = merge(left.next,right)
        } else{
            result = new ListNode(right.val);
            result.next = merge(left,right.next);
        }
        return result;
    }
    
    function getMiddle(node){
        if(!node){
            return null
        }
        let slow = node;
        let fast = node.next;
        // fast are moving 2 times faster. so when it comes to the end,
        // slow will be in the middle
        while(fast!=null){
            fast = fast.next;
            if(fast!=null){
                slow = slow.next;
                fast = fast.next;
            }
        }
        return slow;
    }
    return mergeSort(head)
};