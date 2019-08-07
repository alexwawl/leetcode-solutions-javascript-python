/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort intervals by the first value;
    let merged = []
    intervals = intervals.sort((a,b)=>{
        return a[0] - b[0]
    })
    if(intervals.length < 1){
        return merged
    }
    let current = intervals[0]
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0] <= current[1] ){
            current[1] = Math.max(intervals[i][1] , current[1])
        } else {
            merged.push(current);
            current = intervals[i]
        }
    }
    merged.push(current)
    return merged
};
