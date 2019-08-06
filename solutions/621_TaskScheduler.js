/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let map = new Array(26).fill(0);
    let begin_char_code = 'A'.charCodeAt(0);
    let time = 0;
    for(let i = 0;i<tasks.length;i++){
        let char_code = tasks[i].charCodeAt(0);
        map[char_code - begin_char_code]++
    }
    map = map.sort((a,b)=>{return a-b})
    while(map[25] > 0){
        let index = 0;
        while(index <= n){
            if(map[25]==0){
                break;
            }
            if(index < 26 && map[25-index]>0){
                map[25-index]--;
            }
            time++;
            index++;
        }
        map = map.sort((a,b)=>{return a-b});
    }
    return time
};