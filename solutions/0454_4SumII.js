/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    //a+b+c+d = 0;
    //a+b =-c-d
    let count = 0;
    let dict = {};
    //create dict sum map of a+b
    for(let i=0;i<A.length;i++){
        for(let j=0;j<B.length;j++){
            if(dict[A[i]+B[j]]){
                dict[A[i]+B[j]]++
            } else {
                dict[A[i]+B[j]] = 1;
            }
        }
    }
    
  for(let i=0;i<C.length;i++){
        for(let j=0;j<D.length;j++){
            let curr =-C[i]-D[j];
            if(dict[curr]){
                count = count + dict[curr]
            }
        }
  }
    return count
}