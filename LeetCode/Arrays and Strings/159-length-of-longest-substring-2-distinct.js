/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let array = new Array(128).fill(0);
    let max = 0;
    let i = 0;
    let j = 0;
    
    let count = 0;
    while (j < s.length) {
        if (array[s.charCodeAt(j)] === 0) {
            count++;
        }
        if (count > 2) {
            while (array[s.charCodeAt(i)] >= 1) {
                array[s.charCodeAt(i)]--;
                if (array[s.charCodeAt(i)] === 0) {
                    // found new beginning
                    i++;
                    count--;
                    break;
                }
                i++;
            }
                   
        }
        array[s.charCodeAt(j)]++;
        max = Math.max(max, j - i + 1);
        j++;
    }
    return max;
};