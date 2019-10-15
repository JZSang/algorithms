/*

Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.

 

Example 1:

Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]
Example 2:

Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Example 3:

Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false

*/

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    let graph = [];
    let color = {};
    
    for (let i = 1; i <= N; i++) {
        graph[i] = [];
    }
    
    for (let edge of dislikes) {
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);
    }
    
    function dfs(i, prev) {
        if (color[i]) {
            return color[i] !== prev;
        }
        color[i] = prev ^ 1;
        for (let c of graph[i]) {
            if (!dfs(c, color[i])) {
                return false;
            }
        }
        return true;
    }
    
    for (let i = 1; i < graph.length; i++) {
        if (graph[i].length === 0) {
            continue;
        }
        if (!color[i]) color[i] = 2;
        for (let c of graph[i]) {
            if (!(c in color) && !dfs(c, color[i])) {
                return false;
            }
        }
    }
    return true;
};