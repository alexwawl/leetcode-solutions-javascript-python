/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
   return address.split("").reduce((res, a)=>{
        return res + (a ==='.' ? '[.]' : a)
    },'')
};