/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    
    let stack = [];
    function isAttacked(col,row, upTo) {
        for (let i = 0; i < upTo; i++) {
            if (col - row + i >= 0 && stack[i] === col-row+i) {
                return true;
            } else if (col + row - i < n && stack[i] === col+row-i) {
                return true;
            } else if (stack[i] === col) {
                return true;
            }
        }
        return false;
    }
    let ans = [];
    let length = 0;
    function dfs(i) {
        if (i >= n) {
            length++;
            return;
        }
        
        for (let k = 0; k < n; k++) {
            if (!isAttacked(k,i,i)) {
                stack.push(k);
                dfs(i+1);
                stack.pop();
            }
        }
    }
    dfs(0);
    return length;
};