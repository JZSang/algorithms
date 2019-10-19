/**
 * @param {string} s
 * @return {boolean}
 */


const establish = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let set = new Set(establish);
var isPalindrome = function(s) {
    if (s.length === 0)return true;
    
    let i =0 ;
    let j = s.length-1;
    while (i <= j) {
        while (!set.has(s[i]) && i <= j) i++;
        while (!set.has(s[j]) && i <= j) j--;
        if (i > j) break;
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
        
    }
    return true;
};