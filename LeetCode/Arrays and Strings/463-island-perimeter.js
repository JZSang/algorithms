/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let left = j === 0 ? 1 : grid[i][j-1] ? 0 : 1;
            let right = j === grid[i].length-1 ? 1 : grid[i][j+1] ? 0 : 1;
            let top = i === 0 ? 1 : grid[i-1][j] ? 0 : 1;
            let bottom = i === grid.length-1 ? 1 : grid[i+1][j] ? 0 : 1
            grid[i][j] ? perimeter += left + right + top + bottom : 0;
        }
    }
    return perimeter
};