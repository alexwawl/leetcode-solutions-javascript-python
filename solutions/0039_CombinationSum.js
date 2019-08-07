/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    function helper(candidates, target, index, current, result){
        if(target === 0){
            result.push(current.slice(0)); // add coppy
            return;
        }
        if(target < 0){
            return
        }
        for(let i = index; i<candidates.length;i++){
            current.push(candidates[i])
            helper(candidates, target-candidates[i], i, current, result)
            current.length = current.length - 1
        }
    }
    helper(candidates, target, 0, [], result);
    return result
};