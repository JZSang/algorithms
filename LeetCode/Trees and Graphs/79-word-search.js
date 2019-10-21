/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (word.length === 0) return true;
    if (board.length === 0) return false;
    function dfs(i, j, k) {
        if (i >= board.length || i < 0 || j >= board[0].length || j < 0) {
            return false;
        }
        if (word[k] !== board[i][j]) {
            return false;
        }
        if (board[i][j] === "*") return false;
        
        
        if (word[k] === board[i][j] && k === word.length-1) {
            return true;
        }
        board[i][j] = "*";
        
        let t = dfs(i+1,j,k+1) || dfs(i-1,j,k+1) || dfs(i,j+1,k+1) || dfs(i,j-1,k+1);
        board[i][j] = word[k];
        return t;
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (word[0] !== board[i][j]) continue;
            if (dfs(i,j,0)) {
                return true;
            }
        }
    }
    return false;
};