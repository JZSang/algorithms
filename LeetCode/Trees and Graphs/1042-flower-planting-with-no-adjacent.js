/*

You have N gardens, labelled 1 to N.  In each garden, you want to plant one of 4 types of flowers.

paths[i] = [x, y] describes the existence of a bidirectional path from garden x to garden y.

Also, there is no garden that has more than 3 paths coming into or leaving it.

Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.

Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)-th garden.  The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

 

Example 1:

Input: N = 3, paths = [[1,2],[2,3],[3,1]]
Output: [1,2,3]
Example 2:

Input: N = 4, paths = [[1,2],[3,4]]
Output: [1,2,1,2]
Example 3:

Input: N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
Output: [1,2,3,4]


Time:
V + E for vertices and edges at the beginning to model the graph. Then for each Vertice, we investigate the
edge involved. But that's only if an edge is defined therefore
we have O(V+E)

Space:
We store a graph of 2 * E. Without counting the answer array then out runtime is O(E)

*/

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    let graph = [];
    for (let i = 1; i <= N; i++) {
        graph[i] = [];
    }
    for (let c of paths) {
        graph[c[0]].push(c[1]);
        graph[c[1]].push(c[0]);
    }
    
    
    let array = [];
    for (let i = 1; i < graph.length; i++) {
        let pos = [1,2,3,4];
        for (let c of graph[i]) {
            if (array[c-1]) {
                pos[array[c-1] - 1] = 5;
            }
        }
        array[i-1] = Math.min(...pos);
    }
    return array;
};