/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    let result = [];
    let dict = {};
    for(let i=0;i<barcodes.length;i++){
        if(dict[barcodes[i]]){
            dict[barcodes[i]]++
        } else{
            dict[barcodes[i]] = 1;
        }
    }
    let sortable = [];
    for(let key in dict){
        sortable.push([key,dict[key]])
    }
    sortable = sortable.sort((a,b)=>{
        return a[1]-b[1]
    })
    let index = 1;
    for(let i = 0;i<sortable.length;i++){
        let key = sortable[i][0];
        let occurance = dict[key];
        for(let j =0;j<occurance;j++){
            if(index>=barcodes.length){
                index = 0
            }
            barcodes[index] = key;
            index = index + 2
        }
    }
    return barcodes
    // let index=0;
//     while(sortable.length > 0 ){
//         if(result[index-1]==sortable[0][0]){
//             //next after max
//             result.push(sortable[1][0])
//             sortable[1][1] = sortable[1][1] - 1;
//             if(sortable[1][1] < 1){
//                 sortable.splice(1,1); //if char count <= 0 remove it from array
//             }
//         } else {
//             result.push(sortable[0][0])
//             sortable[0][1] = sortable[0][1] - 1;
//             if(sortable[0][1] < 1){
//                 sortable.splice(0,1); //if char count <= 0 remove it from array
//             }
//         }
//         index++;
//         sortable = sortable.sort((a,b)=>{
//             return b[1]-a[1]
//         })
//         if(sortable.length == 1 && sortable[0][0] == result[index-1]){
//             return []
//         }
        
//     }
//    return result;
};