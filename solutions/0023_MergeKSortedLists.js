/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length == 0){
        return null;
    }
    function mergeTwoLists (l1, l2){
        if(!l1){
            return l2;
        }
        if(!l2){
            return l1;
        }
        if(l1.val < l2.val){
            l1.next = mergeTwoLists(l1.next,l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
    while(lists.length > 1){
        let l1 = lists.pop();
        let l2 = lists.pop();
        let result = mergeTwoLists(l1,l2)
        lists.unshift(result);
        // The trick use unshift to add and pop pop for get. becuase 2 shift is slower than 1 unshift
    }
    return lists[0]
};