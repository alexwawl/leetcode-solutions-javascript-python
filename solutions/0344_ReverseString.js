/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

 // Iterative will be faster and use less memory. But trying to do it recursively because of learning purpose.
var reverseString = function(s) {

    function helper(s,index=0){
        let n = s.length
        if(index >= n / 2){
            return;
        }
        let tmp = s[index];
        s[index] = s[s.length - index - 1]
        s[s.length - index - 1] = tmp
        helper(s, index+1)
    }

    
    helper(s)
};