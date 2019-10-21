/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let visited = new Set();
    let count = 0;
    function dfs(i, j) {
        if (i >= M.length || j >= M.length) {
            return;
        }
        if (visited.has(i)) return;
        visited.add(i);
        for (let k = 0; k < M.length; k++) {
            if (k === j) continue;
            if (M[i][k] === 1) {
                dfs(k, k);
                
            }
            
        }
    }
    
    for (let i = 0; i < M.length; i++) {
        if (!visited.has(i)) {
            dfs(i,i);
            count++;
        }
    }
    return count;
};