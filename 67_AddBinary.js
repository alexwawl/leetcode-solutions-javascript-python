/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aLast = a.length - 1;
    let bLast = b.length - 1;
    let carry = 0;
    let result = []
    while(aLast>=0 || bLast >=0){
        let sum = carry;
        if(aLast>=0){
            sum = sum + Number(a[aLast])
            aLast--;
        }
        if(bLast>=0){
            sum = sum + Number(b[bLast])
            bLast--;
        }
        result.push(sum%2)
        carry = Math.floor(sum / 2)
    }
    if(carry){
        result.push(carry)
    }
    return result.reverse().join("")
};