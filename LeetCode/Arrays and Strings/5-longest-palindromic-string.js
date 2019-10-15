/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"


Time:
n is the length of the string.
We check every position in the string. At every position we explore every letter until it hits a boundary or
is no longer a palindrome. Then we have n/2 + n-2/2 + n-4/2 + n-2i/2.... + 1. This is just the sum of i which
is O(n^2) on the worst case.
The slice at the end is at most O(n) where n is the length of the string.

space:
Our combination array is a constant of two numbers.
Slice will reutrn a unique string that could be at most n length.
O(1)
*/


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s.length) return "";
    if (s.length === 1) return s[0];
    let length = 0;
    let combination = [];
    for (let i = 1; i < s.length; i++) {
        let j = 1;
        while (i - j >= 0 && i + j < s.length) {
            if (s[i - j] === s[i + j]) {
                j++;
            } else {
                break;
            }
        }
        let k = 0;
        while (i - k >= 0 && i + k < s.length) {
            if (s[i - k - 1] === s[i + k]) {
                k++;
            } else {
                break;
            }
        }
        
        let largestSlice = 2 *k > 2*j - 1 ? [i-k,i+k] : [i-j+1, i+j];
        let l = largestSlice[1] - largestSlice[0]
        if (l > length) {
            combination = largestSlice;
            length = l; 
        }
    }
    return s.slice(combination[0], combination[1]);
};