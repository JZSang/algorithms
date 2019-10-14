// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.



/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let stack = [s[0]];
    let total = 0;
    let current = s[0];
    for (let i = 1; i < s.length; i++) {
        if (!current) {
            current = s[i];
        }
         if (s[i] !== current) {
             stack.pop();
         } else {
             stack.push(s[i]);
         }
        if (stack.length === 0) {
            total++;
            current = null;
        }
    }
    return total;
};