/*

In some array arr, the values were in arithmetic progression: the values arr[i+1] - arr[i] are all equal for every 0 <= i < arr.length - 1.

Then, a value from arr was removed that was not the first or last value in the array.

Return the removed value.
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
    let progression = (arr[arr.length-1] - arr[0]) / arr.length;
    if (progression === 0) return 0;
    let expected = arr[0] + progression;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== expected) {
            return expected;
        } else {
            expected = arr[i] + progression
        }
    }
};