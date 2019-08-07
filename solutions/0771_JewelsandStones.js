/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jewels_dict = {};
    let count = 0;
    for(let i=0;i<J.length;i++){
        jewels_dict[J[i]] = true;
    }
    for(let i=0;i<S.length;i++){
        if(jewels_dict[S[i]]){
            count = count+1;
        }
    }
    return count
};