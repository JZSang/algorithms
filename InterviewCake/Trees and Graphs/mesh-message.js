function shortestRoute(network, sender, recipient) {
    // bfs
    let queue = [sender]; // assume this is a queue 
    let visited = new Set();

    const path = {};
    path[sender] = null;

    while (queue.length) {
        let current = queue.shift();
        // console.log(current);

        if (current === recipient) {
            const reversed = [];
            // console.log(path);
            while (current !== null) {
                reversed.push(current);
                current = path[current];
                // console.log(current);
            }
            return reversed.reverse();
        }
        if (!network[current]) continue;
        for (let c of network[current]) {
            if (!path.hasOwnProperty(c)) {
                queue.push(c);
                path[c] = current;
            }
        }
    }
    return null;
}



  const network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam'    : ['Nathan', 'Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Scott'],
    
  };

  console.log(shortestRoute(network, "Min", "Adam"))