/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === "1") {
                let total = 1;
                let k = i;
                let m = j;
                while(k<matrix.length && m < matrix[0].length && matrix[k][m] === "1") {
                    let fail = false;
                    for (let a = 0; a < total; a++) {
                        if (matrix[k-a][m] !== "1" || matrix[k][m-a] !== "1") {
                            fail = true;
                            break;
                        }
                    }
                    if (fail) break;
                    total++;
                    k++;
                    m++;
                    
                }
                
                max = Math.max(total-1, max);
                
            }
        }
    }
    return max ** 2;
};