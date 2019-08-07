/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let l_pointer = 0;
    let r_pointer = s.length-1;
    let vowels = 'aeiouAEIOU'
    s = s.split('');
    while(l_pointer<r_pointer){
        if(vowels.indexOf(s[l_pointer]) > -1 && vowels.indexOf(s[r_pointer]) > -1){
            let tmp = s[l_pointer]
            s[l_pointer] = s[r_pointer]
            s[r_pointer] = tmp
            l_pointer++;
            r_pointer--;
        } else if (vowels.indexOf(s[l_pointer]) > -1 && vowels.indexOf(s[r_pointer]) == -1){
            r_pointer--
        } else {
            l_pointer++;
        }
    }
    return s.join('')
};