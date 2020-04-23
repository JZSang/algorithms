class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        count = 0
        if len(grid) <= 0:
            return 0
        height = len(grid)
        width = len(grid[0])
        
        def dfs(i, j):
            if grid[i][j] == '0':
                return
            else:
                grid[i][j] = '0'
            if i + 1 < height:
                dfs(i+1,j)
            if i - 1 >= 0:
                dfs(i-1,j)
            if j+1 < width:
                dfs(i, j+1)
            if j-1 >= 0:
                dfs(i, j - 1)
        
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == '0':
                    continue
                dfs(i, j)
                count += 1
        
        
        return count
        