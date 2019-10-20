/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let total = 0;
    
    let dfs = function(i, j) {
        
        if (i >= grid.length || i < 0) {
            return 0;
        }
        if (j >= grid[i].length || j < 0) {
            return 0;
        }
        if (grid[i][j] == 0) {
            return 0;
        }
        grid[i][j] = 0;
        dfs(i+1,j)
        dfs(i-1,j)
        dfs(i, j+1)
        dfs(i, j-1);
    }


    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                total++;
                dfs(i, j);
            }
        }
    }
    return total;
};

