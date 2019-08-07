/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    //calc distance
    function distance(a){
        //assume that b is 0;
        return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2));
    }
    let result =  [];
    points.forEach(point => {
       let obj = {key: point, distance: distance(point)}
       result.push(obj)
    })
   result = result.sort((a,b)=>{
       return a.distance - b.distance
   }).map((a)=>{
       return a.key;
   })
    return result.slice(0,K)
};