class Solution:
    def numOfMinutes(
        self, n: int, headID: int, manager: List[int], informTime: List[int]
    ) -> int:
        # topological
        graph = [[] for i in range(n)]
        for employee, man in enumerate(manager):
            if man >= 0:
                graph[man].append(employee)

        def dfs(num):
            return informTime[num] + max([dfs(i) for i in graph[num]] or [0])

        return dfs(headID)

