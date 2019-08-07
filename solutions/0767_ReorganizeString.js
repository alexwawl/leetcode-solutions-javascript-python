/**
 * @param {string} S
 * @return {string}
 */
//NOT OPTIMIZED SOLUTION
var reorganizeString = function(S) {
    let result = '';
    let dict = {};
    for(let i=0;i<S.length;i++){
        if(dict[S[i]]){
            dict[S[i]]++
        } else{
            dict[S[i]] = 1;
        }
    }
    let sortable = [];
    for(let key in dict){
        sortable.push([key,dict[key]])
    }
    sortable = sortable.sort((a,b)=>{
        return b[1]-a[1]
    })
    let index=0;
    while(sortable.length > 0 ){
        if(result[index-1]==sortable[0][0]){
            //next after max
            result = result + sortable[1][0]
            sortable[1][1] = sortable[1][1] - 1;
            if(sortable[1][1] < 1){
                sortable.splice(1,1); //if char count <= 0 remove it from array
            }
        } else {
            result = result + sortable[0][0]
            sortable[0][1] = sortable[0][1] - 1;
            if(sortable[0][1] < 1){
                sortable.splice(0,1); //if char count <= 0 remove it from array
            }
        }
        index++;
        sortable = sortable.sort((a,b)=>{
            return b[1]-a[1]
        })
        if(sortable.length == 1 && sortable[0][0] == result[index-1]){
            return ''
        }
    }
    return result;
};