/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    // sort !
    
    let result = [];
    candidates = candidates.sort((a,b)=>{return a-b})
    function helper(candidates, target, index, current){
        if(target === 0){
            result.push(current.slice(0));
            return
        }
        if(target < 0){
            return;
        }
        for(let i = index; i<candidates.length;i++){
            if(candidates[i] != candidates[i-1] || i == index){
                current.push(candidates[i])
                helper(candidates, target - candidates[i], i+1, current)
                //remove last added
                current.length = current.length - 1
            }
            
        }
    }
    helper(candidates, target, 0, [])
    return result;
};