/**
Given an integer array arr and an integer difference, return the length of the longest 
subsequence in arr which is an arithmetic sequence such that the difference between adjacent
 elements in the subsequence equals difference.
 * 
 */

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let obj = {};
    let lookback = difference;
    let max = 1;
    for (let i = 0; i < arr.length; i++) {
            max = Math.max(max, (obj[arr[i] - difference] || 0) + 1);
            obj[arr[i]] = (obj[arr[i] - difference] || 0) + 1;
            // delete obj[arr[i] - difference];
       
    }
    return max;
};