/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let min = letters[0];
    let minPass = null;
    for (let i = 0; i < letters.length; i++) {
        if ((minPass === null || letters[i] < minPass) && letters[i] > target) {
            minPass = letters[i];
        }
    }
    return minPass || min;
};