/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let letters_dict = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']
    }
    let result = [];
    
    function generate(result, letters_dict, digits, index, current){
        if(index == digits.length){
            result.push(current)
            return;
        }
        let curr_chars = letters_dict[digits.split('')[index]];
        for(let i = 0;i<curr_chars.length;i++){
            generate(result, letters_dict, digits, index+1, current+curr_chars[i])
        }
    }
    if(!digits){
        return result
    }
    generate(result, letters_dict, digits, 0, '')
    return result
};