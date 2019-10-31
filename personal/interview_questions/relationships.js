let relationships = [
    ["Bart", "brother", "Lisa"],
    ["Bart", "son", "Homer"],
    ["Marge", "wife", "Homer"],
    ["Lisa", "daughter", "Homer"],
    ["Bart", "brother", "Nam"],
    ["Nam", "sister", "Lisa"]
]

// wish interview (else) 2019 during winter

function solution(relationships, name1, name2) {

    let relationship = {};
    let graph = {};
    let visited = new Set();

    for (let c of relationships) {
        graph[c[0]] = graph[c[0]] || [];
        graph[c[0]].push(c[2]);
        relationship[c[0] + c[2]] = c[1];
    }
    // check if name1 or name2 doesn't exist

    let ans = [];

    function dfs(from, array) {
        array.push(from);
        if (from === name2) {
            ans.push(array.join(" "));
            array.pop();
            return;
        }
        visited.add(from);
        for (let c of graph[from]) {
            if (visited.has(c)) continue;
            array.push(relationship[from + c]) 
            dfs(c, array);
            array.pop();
        }
        visited.delete(from);
        array.pop();
    }

    dfs(name1, []);
    return ans;
}

console.log(solution(relationships, "Bart", "Homer"))

// ["Bart son Homer", "Bart brother Lisa daughter Homer"]