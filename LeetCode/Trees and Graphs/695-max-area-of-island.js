/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (grid.length === 0) return 0;
    let max = 0;
    
    let dfs = function(i, j) {
        
        if (i >= grid.length || i < 0) {
            return 0;
        }
        if (j >= grid[i].length || j < 0) {
            return 0;
        }
        if (grid[i][j] === -1) {
            return 0;
        }
        if (grid[i][j] === 0) {
            return 0;
        }
        grid[i][j] = -1;
        return 1 + dfs(i+1,j) + dfs(i-1,j) + dfs(i, j+1) + dfs(i, j-1);
    }
    for (let i = 0; i < grid.length;i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0 || grid[i][j] === -1) continue;
            max = Math.max(max, dfs(i, j));
        }
    }
    return max;
    
};

