/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = new Array(n);
    
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(n).fill(".");
    }
    
    function isAttacked(col,row, upTo) {
        for (let i = 0; i < upTo; i++) {
            if (col - row + i >= 0 && board[i][col-row + i] === "Q") {
                return true;
            } else if (col + row - i < board.length && board[i][col+row-i] === "Q") {
                return true;
            } else if (board[i][col] === "Q") {
                return true;
            }
        }
        return false;
    }
    let ans = [];
    function dfs(i) {
        if (i >= board.length) {
            let res = [];
            for (let c of board) {
                res.push(c.join(""));
            }
            ans.push(res);
            return;
        }
        
        for (let k = 0; k < n; k++) {
            if (!isAttacked(k,i,i)) {
                board[i][k] = "Q";
                dfs(i+1);
                board[i][k] = ".";
            }
        }
    }
    dfs(0);
    return ans;
    
};