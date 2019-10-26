class Node_clone {
    constructor(d) {
      this.data = d;
      this.neighbors = [];
    }
  }
  
  let clone = function(root) {
    let visited = new Set();
    let queue = [root];
  
    let hash = {};
  
    while (queue.length) {
      let dequeue = queue.shift();
      if (visited.has(dequeue.data)) continue;
      visited.add(dequeue.data);
      hash[dequeue.data] = hash[dequeue.data] || new Node_clone(dequeue.data);
  
      for (let c of dequeue.neighbors) {
          queue.push(c);
          let clone = new Node_clone(c.data);
          hash[dequeue.data].neighbors.push(hash[c.data] || clone);
        hash[c.data] = hash[c.data] || clone;
      }
    }
    return hash[root.data];
  };

  console.log(clone({data: 3, neighbors: [{data:4, neighbors: [{data:5, neighbors: []}]}, {data:5, neighbors: []}]}).neighbors[0])