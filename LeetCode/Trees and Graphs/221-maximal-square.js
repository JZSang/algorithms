/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;
    let dp = [];
    for (let i = 0; i < matrix.length; i++) {
        dp.push(new Array(matrix[0].length));
    }
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = Number(matrix[i][j]);
            if (matrix[i][j] === 1 && i>=1 && j>=1) {
                dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1;
            } else {
                dp[i][j] = matrix[i][j];
            }
            max = Math.max(dp[i][j], max);
        }
    }
    return max**2;
};