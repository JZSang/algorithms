/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    if (A.length <=2) return 0;
    let leftConfirm = 0;
    let i = 1;
    let longest = 0;
    while (i < A.length) {
        let length = 1;
        if (A[i] <= A[i-1]) {
            i++;
            continue; 
        }
        while (i < A.length && A[i] > A[i-1]) {
            length++;
            i++;
        }
        if (i < A.length && A[i] === A[i-1]) {
            continue;
        }
        while (i < A.length && A[i] < A[i-1]) {
            length++;
            i++;
            longest = Math.max(longest, length);
        }
    }
    return longest;
};