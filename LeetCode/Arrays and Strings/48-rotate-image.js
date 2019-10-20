/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 /*
 n^2 two pass 
 */
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].reverse();
    }
    

};