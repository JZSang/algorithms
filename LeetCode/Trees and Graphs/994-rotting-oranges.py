from collections import deque


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        if not grid:
            return 0

        def bfs(i, j):
            queue = deque()
            length = 1

            def get_surroundings(i, j, length):
                if i+1 < len(grid):
                    queue.append((i+1, j, length))
                if i-1 >= 0:
                    queue.append((i-1, j, length))
                if j+1 < len(grid[i]):
                    queue.append((i, j+1, length))
                if j-1 >= 0:
                    queue.append((i, j-1, length))
            get_surroundings(i, j, length)

            while queue:
                i0, j0, length = queue.popleft()
                if grid[i0][j0] == 0 or grid[i0][j0] == 2:
                    continue
                if grid[i0][j0] < 0 and -length < grid[i0][j0]:
                    continue
                else:
                    grid[i0][j0] = -length

                get_surroundings(i0, j0, length + 1)

        for i, _ in enumerate(grid):
            for j, _ in enumerate(grid[i]):
                if grid[i][j] == 2:
                    bfs(i, j)

        lowest = 0
        for i in grid:
            for j in i:
                if j == 1:
                    return -1
                else:
                    lowest = min(lowest, j)

        return -lowest
