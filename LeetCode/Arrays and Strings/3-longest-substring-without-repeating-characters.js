/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let array = new Array(128).fill(-1);
    let max = 0;
    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (array[s.charCodeAt(j)] >= 0) {
            i = Math.max(array[s.charCodeAt(j)] + 1, i);
        }
        array[s.charCodeAt(j)] = j;
        max = Math.max(max, j - i + 1);
        j++;
        
    }
    return max;
};