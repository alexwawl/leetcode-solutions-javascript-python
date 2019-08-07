/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let numbers = [];
    let tmp = [];
    let size = k; // Who named parameters as n and k ? O_o what does these chars mean
    for (let i = 1; i<=n; i++){
        numbers.push(i)
    }
    function helper(numbers, size, tmp, start){
        if(tmp.length == size){
            result.push(tmp.slice(0)); //push copy to array because on rollback we will have empty array
            return;
        } else {
            for(let i=start; i < numbers.length;i++){
                tmp.push(numbers[i])
                helper(numbers, size, tmp, i+1);
                tmp.pop()
            }
        }
    }
    helper(numbers,size,tmp,0)
    return  result;
};