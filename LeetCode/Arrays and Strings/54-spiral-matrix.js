/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return []
    let counter = matrix.length * matrix[0].length;
    
    let iTotal = matrix.length - 1;
    let jTotal = matrix[0].length - 1;
    
    let ans = [];
    
    let i = 0;
    let j = 0;
    
    let iTurn = false;
    
    let jRight = true;
    let iDown = true;
    
    while (j < matrix[0].length) {
        ans.push(matrix[i][j++]);
        counter--;
    }
    j = j - 1;
    jRight = false;
    iTurn = true;
    while (counter > 0) {
        if (!iTurn) {
            let curJTotal = jTotal;
            while (curJTotal) {
                ans.push(matrix[i][jRight ? ++j : --j]);
                curJTotal--;
                        counter--;
            }
            jTotal--;
            jRight = !jRight;
            iTurn = !iTurn;
        } else {
            let curITotal = iTotal;
            while (curITotal) {
                ans.push(matrix[iDown ? ++i: --i][j])
                curITotal--;
                        counter--;
            }
            iTotal--;
            iDown = !iDown;
            iTurn = !iTurn
        }
    }
    
    return ans;
};