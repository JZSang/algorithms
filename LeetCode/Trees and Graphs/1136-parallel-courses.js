/**
 * @param {number} N
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(N, relations) {
    // explain the algorithm beforehand
    // mumbling too much
    // be more clear of what you're able to do. 
    // make a roadmap
    // for each line of code, explain why each line is useful. "significant blocks"
    // response to questions was fine
    // if you have any assumptions, do it at the beginning
    // shoudl show ur thinking about other requirements
    // should i ask if "this is right?" => do you have any suggestions
    // wish or google docs practice writing out examples and running through
    // 1 => 2 => 3   4 => 3
    // explanation should be better
    let adj = {};
    let degrees = {};
    let visited = new Set();
    
    for (let i = 1; i <= N; i++) {
        degrees[i] = 0;
        adj[i] = new Set();
    }
    
    for (let i = 0; i < relations.length; i++) {
        adj[relations[i][0]] = (adj[relations[i][0]])
        adj[relations[i][1]] = (adj[relations[i][1]])
        
        adj[relations[i][0]].add(relations[i][1]);
        degrees[relations[i][1]] = (degrees[relations[i][1]] || 0) + 1;
    }
    
    let queue = [];
    
    for (let deg in degrees) {
        if (degrees[deg] === 0) {
            queue.push(deg);
        }
    }
    let semesters = 0;
    if (queue.length === 0) return -1;
    while (queue.length) {
        let length = queue.length;
        
        for (let i = 0; i < length; i++) {
            let val = queue.shift();
            let set = adj[val];
            if (visited.has(val)) return -1;
            visited.add(val);
            for (let elem of set) {
                degrees[elem]--;
                if (degrees[elem] === 0) {
                    queue.push(elem);
                }
            }
        }
        semesters++;
        
    }
    return semesters === 1 && relations.length !== 0 ? -1 : semesters;
};