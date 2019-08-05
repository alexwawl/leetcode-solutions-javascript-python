/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let start_window = 0;
    let end_window = 0;
    let length = s.length;
    let window = {};
    while(start_window < length && end_window < length){
        if(window[s[end_window]]){
            delete window[s[start_window]]
            start_window = start_window + 1
        } else {
            window[s[end_window]] = true;
            end_window = end_window + 1;
            result = Math.max(result, end_window-start_window)   
        }
    }
    return result
};