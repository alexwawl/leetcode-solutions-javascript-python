/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let dict = {}
    let result = []
    for(let i = 0;i<strs.length;i++){
        let word = strs[i].split('').sort((a,b)=>{return a>b});
        if(dict[word]){
            dict[word].push(strs[i])
        } else {
            dict[word] = [strs[i]]
        }
    }
    for(let key in dict){
        result.push(dict[key])
    }
    return result
};