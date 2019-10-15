/*

Color the nodes in a graph so adjacent nodes
always have different colors

Input:



*/

let input = [undefined, [2,5], [1,5,3,6,4], [2,6], [7,2,6,8,9], [1,2,7], [3,2,4,9], [4,5], [4,9], [4,8,6]];

let color = {};

let COLORS = ['RED', 'GREEN', 'BLUE'];

function graphColor(input) {
    let graph = input;

    function dfs(i, prev) {
        if (color[i]) {
            return color[i] !== prev;
        }
        // console.log(color);
        for (let cl of COLORS) {
            if (cl === prev) continue;
            color[i] = cl;
            let breaked = 0;
            for (let c of graph[i]) {
                if (!dfs(c, cl)) {
                    breaked = 1;
                    break;
                }
            }
            if (!breaked) return true; 
        }
        return true;
    }

    for (let i = 1; i < graph.length; i++) {
        if (graph[i].length === 0) {
            continue;
        }
        if (color[i]) continue;
        if (!color[i]) color[i] = 'RED';
        for (let c of graph[i]) {
            if (!(c in color) && !dfs(c, color[i])) {
                return false;
            }
        }
    }
    return true;
}

console.log(graphColor(input));
console.log(color);
