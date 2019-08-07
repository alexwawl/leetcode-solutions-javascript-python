/*
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let a_pointer = 0;
    let b_pointer = 0;
    let merged = [];
    while(a_pointer < A.length && b_pointer < B.length){
        let curr_a = A[a_pointer];
        let curr_b = B[b_pointer];
        let start = Math.max(curr_a[0],curr_b[0]);
        let end = Math.min(curr_a[1],curr_b[1]);
        if(start <= end){
            merged.push([start,end]);
        }
      
        if(curr_a[1] < curr_b[1]){
            a_pointer++;
        } else {
            b_pointer++;
        } 
    }
    return merged
};