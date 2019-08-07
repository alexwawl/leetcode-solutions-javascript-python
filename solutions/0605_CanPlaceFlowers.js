/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i<flowerbed.length;i++){
        if(flowerbed[i] == 0 && n>0){
            let before = i-1 >= 0 ? i-1 : 0;
            let after = i+1 < flowerbed.length ? i+1 : flowerbed.length-1;
            if(flowerbed[before] == 0  && flowerbed[after] == 0){
                flowerbed[i] = 1;
                n = n - 1;
            }
        }
    }
    return n == 0;
};