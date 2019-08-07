/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if(!s) { return '';}
    var result = '';
    var pointer = 0;
    var times = 1;
    var nums = '0123456789'
    while(pointer < s.length){
        if(nums.indexOf(s[pointer]) > -1){
            // if number than
            let start = pointer
            while(nums.indexOf(s[pointer]) > -1){
                
                times = parseInt(s.slice(start,pointer+1))
                pointer++
            }
        } else {
            if(s[pointer] == '['){
                let end = pointer + 1;
                let queue = [s[pointer]];
                //iterate until find closed ']' for current '['
                while(queue.length > 0){
                    if(s[end] === '['){
                        queue.push(s[end])
                    }
                    if(s[end] === ']'){
                        queue.pop()
                    }
                    end++
                }
                result = result + decodeString(s.slice(pointer + 1, end -1)).repeat(times);
                times = 1;
                pointer = end;
            } else {
                result = result + s[pointer].repeat(times)
                times = 1;
                pointer++
            }
        
        }
    }
    return result
};