/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var map = new Map();
    for(let i = 0;i<s.length;i++){
        map.set(s[i], map.get(s[i]) ? map.get(s[i])+1 : 1)
    }
    let str = [...map.entries()].sort((a,b)=>{
        return b[1] - a[1]
    }).map((a)=>{
        if(a[1] === 1){
           return a[0]
        } else {
            let tmp = ''
            while(a[1] > 0){
                tmp = tmp + a[0]
                a[1]--
            }
            return tmp
        }
    })
    return str.join('')
};