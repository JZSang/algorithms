class Solution:
    def shortestDistance(self, grid: List[List[int]]) -> int:
        minDistance = float('inf')
        
        numberOfBuildings = 0
        for i, row in enumerate(grid):
            for j, elem in enumerate(row):
                if elem == 1:
                    numberOfBuildings += 1
                    
        reach = [[0 for elem in row] for row in grid]
        distance = [[0 for elem in row] for row in grid]
        for i1, row in enumerate(grid):
            for j1, elem in enumerate(row):
                if elem == 1:
                    queue = deque()
                    queue.append((i1, j1, 0))
                    visited = set()
                    while queue:
                        coordinate = queue.popleft()

                        if (coordinate[0], coordinate[1]) in visited:
                            continue
                        visited.add((coordinate[0], coordinate[1]))
                        if grid[coordinate[0]][coordinate[1]] == 1 and coordinate[2] > 0:
                            continue
                        i = coordinate[0]
                        j = coordinate[1]
                        if grid[i][j] == 0:
                            reach[i][j] += 1
                            distance[i][j] += coordinate[2]
                        newDistance = coordinate[2] + 1
                        if i+1 < len(grid) and grid[i+1][j] == 0:
                            queue.append((i+1, j, newDistance))
                        if i - 1 >= 0 and grid[i-1][j] == 0:
                            queue.append((i-1,j,newDistance))
                        if j+1 < len(grid[0]) and grid[i][j+1] == 0:
                            queue.append((i, j+1, newDistance))
                        if j-1 >= 0 and grid[i][j-1] == 0:
                            queue.append((i, j-1, newDistance))
                        
        for i, row in enumerate(grid):
            for j, elem in enumerate(row):
                if elem == 0:
                    if reach[i][j] == numberOfBuildings:
                        minDistance = min(minDistance, distance[i][j])
        return minDistance if minDistance != float('inf') else -1
                        
                            
                            