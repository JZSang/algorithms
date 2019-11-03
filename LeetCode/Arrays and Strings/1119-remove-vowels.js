/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    let newString = [];
    for (let c of S) {
        if (c === 'a' || c === 'e' || c === 'i' || c ==='o' || c === 'u') {
            
        } else {
            newString.push(c);
        }
    }
    return newString.join("");
};