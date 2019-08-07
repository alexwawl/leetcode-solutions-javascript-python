/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false
    }
    let dict = {};
    for(let i = 0 ;i<s.length;i++){
        if(dict[s[i]]){
            dict[s[i]]++
        } else {
            dict[s[i]] = 1
        }
    }
    for(let j = 0; j<t.length;j++){
        if(dict[t[j]]){
            dict[t[j]]--;
            if(dict[t[j]] <= 0){
                delete dict[t[j]]
            }
        } else {
            return false
        }
    }
    return true
};