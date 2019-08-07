/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let clone_map = new Map();
    if(head == null){
        return null
    }
    let curr = head;
    //copying each element to map.
    // in map we have Key (original value) : Value (copy of original value)
    while(curr!=null){
        clone_map.set(curr, new Node(curr.val));
        curr = curr.next
    }
    curr = head;
    while(curr != null){
        let next = clone_map.get(curr.next);
        if(next){
            clone_map.get(curr).next = clone_map.get(curr.next);
        } else {
            clone_map.get(curr).next = null;
        }
        let random = clone_map.get(curr.random);
        if(random){
            clone_map.get(curr).random = random;
        } else{
            clone_map.get(curr).random = null;
        }
        
        
        curr = curr.next;
    }
    //console.log(clone_map.get(head))
    return clone_map.get(head)
};