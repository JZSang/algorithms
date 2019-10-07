/*

In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position you can walk one step to the left, right, up or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let max = Number.MIN_SAFE_INTEGER;
    
    let gridVisit = new Array(grid.length);
    for (let i = 0; i < gridVisit.length; i++) {
        gridVisit[i] = new Array(grid[0].length).fill(0);
    }
    function backtrack(grid, i, j, gold) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
            return gold;
        }
        if (gridVisit[i][j]) {
            return gold;
        }
        
        if (!grid[i][j]) {
            return gold;
        }
        gridVisit[i][j] = 1;
        gold += grid[i][j];
        
        let max = 0;
        max = Math.max(backtrack(grid, i-1, j, gold), backtrack(grid, i+1, j, gold), backtrack(grid, i, j+1, gold), backtrack(grid, i, j-1, gold))
        gridVisit[i][j] = 0;
        return max;
        
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            max = Math.max(max, backtrack(grid, i, j, 0));
        }
    }
    return max;
};