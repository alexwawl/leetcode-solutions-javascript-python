/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let dict = {};
    for(let i = 0 ; i<s.length;i++){
        if(dict[s[i]]){
            dict[s[i]]++
        } else {
            dict[s[i]] = 1;
        }
    }
    let keys = Object.keys(dict)
    for(let i = 0;i<s.length;i++){
        if(dict[s[i]] == 1){
            return i
        }
    }
    return -1
};