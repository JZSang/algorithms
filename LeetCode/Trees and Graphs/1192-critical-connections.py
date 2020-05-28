class Solution:
    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:
        def create_graph(connections):
            from collections import defaultdict
            graph = defaultdict(list)
            for connection in connections:
                graph[connection[0]].append(connection[1])
                graph[connection[1]].append(connection[0])
            return graph

        graph = create_graph(connections)
        connections = set(map(tuple, (map(sorted, connections))))
        rank = [-2] * n

        def dfs(i, node):
            if rank[node] >= 0:
                return rank[node]
            rank[node] = i
            minimum = n
            for branch in graph[node]:
                if rank[branch] + 1 == i:
                    continue
                lowest = dfs(i+1, branch)
                if lowest <= i:
                    connections.discard(tuple(sorted((node, branch))))
                minimum = min(lowest, minimum)
            return minimum

        dfs(0, 0)
        return connections
