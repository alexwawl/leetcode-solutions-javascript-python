/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = new Map()
    words.forEach((word)=>{map.set(word, map.get(word) ? map.get(word)+1: 1)})
    let words_freq = [...map.entries()].sort((a,b)=>{
        if(b[1] > a[1]){
            return 1
        }
        if(b[1] < a[1]){
            return -1
        }
        if(b[1] == a[1]){
            if(b[0] > a[0]){
                return -1
            } else {
                return 1
            }
        }
    })
    let result = words_freq.slice(0,k);
    return result.map((a)=>{return a[0]})
};