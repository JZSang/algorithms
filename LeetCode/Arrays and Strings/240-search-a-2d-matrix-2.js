/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false
    let i = 0;
    let j = matrix[0].length;
    while ( i < matrix.length && j >= 0) {
        let val = matrix[i][j];
        if (val === target) {
            return true;
        } else if (val < target) {
            i++;
        } else {
            j--;
        }
    }
    return false;
};