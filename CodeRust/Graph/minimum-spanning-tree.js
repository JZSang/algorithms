class TinyQueue {
    constructor(data = [], compare = defaultCompare) {
        this.data = data;
        this.length = this.data.length;
        this.compare = compare;

        if (this.length > 0) {
            for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
        }
    }

    push(item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    }

    pop() {
        if (this.length === 0) return undefined;

        const top = this.data[0];
        const bottom = this.data.pop();
        this.length--;

        if (this.length > 0) {
            this.data[0] = bottom;
            this._down(0);
        }

        return top;
    }

    peek() {
        return this.data[0];
    }

    size() {
        return this.length;
    }

    _up(pos) {
        const {data, compare} = this;
        const item = data[pos];

        while (pos > 0) {
            const parent = (pos - 1) >> 1;
            const current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    }

    _down(pos) {
        const {data, compare} = this;
        const halfLength = this.length >> 1;
        const item = data[pos];

        while (pos < halfLength) {
            let left = (pos << 1) + 1;
            let best = data[left];
            const right = left + 1;

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

class vertex_mst {
  constructor(id, visited) {
    this.id = id;
    this.visited = visited;
  }
}

class edge_mst {
  constructor(weight, visited, src, dest) {
    this.weight = weight;
    this.visited = visited;
    this.src = src;
    this.dest = dest;
  }
}

class graph_mst {
  constructor(g, e) {
    this.g = g;
    this.e = e;
  }

  // This method returns the vertex with a given id if it
  // already exists in the graph, returns NULL otherwise
  vertex_exists(id) {
    for (let i = 0; i < this.g.length; i++) {
      if (this.g[i].id === id) {
        return this.g[i];
      }
    }
    return null;
  }
  // This method generates the graph with v vertices
  // and e edges
  generate_graph(vertices, edges) {
    // create vertices
    for (let i = 0; i < vertices; i++) {
      let v = new vertex_mst(i + 1, false);
      this.g.push(v);
    }

    // create edges
    for (let i = 0; i < edges.length; i++) {
      let src = this.vertex_exists(edges[i][1]);
      let dest = this.vertex_exists(edges[i][2]);
      let e = new edge_mst(edges[i][0], false, src, dest);
      this.e.push(e);
    }
  }
  // This method finds the MST of a graph using
  // returns the weight of the MST
  find_min_spanning_tree() {  
      if (this.e.length === 0 || this.g.length <= 1) return 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let z = 0; z < this.g.length; z++) {
      let pq = new TinyQueue([new Path(0, this.g[z], new Set([this.g[z].id]))], (a,b) => {
        return a.length - b.length;
    })
      let visited = new Set();
      
      while (pq.length) {
          let dequeue = pq.pop();

          let curWeight = dequeue.length;
          let curNode = dequeue.curNode;
          let visitedNodes = dequeue.visited;
          if (visitedNodes.size === this.g.length) min = Math.min(min, curWeight);
          for (let i = 0; i < this.e.length; i++) {
            
              if (this.e[i].src.id === curNode.id && !visitedNodes.has(this.e[i].dest.id)) {
                  // if (visited.size === this.g.length-1) min = Math.min(min, curWeight + this.e[i].weight);
                  let newVisited = new Set(visitedNodes);
                  newVisited.add(this.e[i].dest.id);
                  pq.push(new Path(curWeight + this.e[i].weight, this.g[this.e[i].dest.id-1], newVisited));
              } else if (this.e[i].dest.id === curNode.id && !visitedNodes.has(this.e[i].src.id)) {
                // if (visited.size === this.g.length-1) min = Math.min(min, curWeight + this.e[i].weight);
                let newVisited = new Set(visitedNodes);
                  newVisited.add(this.e[i].src.id);
                pq.push(new Path(curWeight + this.e[i].weight, this.g[this.e[i].src.id-1], newVisited))
              }
          }
      }
      
    }

    return min;   
  }

  print_graph() {
    for (let i = 0; i < this.g.length; i++) {
      console.log(this.g[i].id + " " + this.g[i].visited);
    }

    for (let i = 0; i < this.e.length; i++) {
      console.log(this.e[i].src.id + "->" +
                  this.e[i].dest.id + "[" +
                  this.e[i].weight + ", " +
                  this.e[i].visited + "]  ");
    }

  }

  get_graph() {
    res = ""
    for (let i = 0; i < this.e.length; i++) {
      res += "[" + this.e[i].src.id + "->" +
                  this.e[i].dest.id + "], ";
    }
    return res;
  }
  
  print_mst(w) {
    console.log("MST");
    for (let i = 0; i < this.e.length; i++) {
      if (this.e[i].visited === true) {
        console.log(this.e[i].src.id + "->" + this.e[i].dest.id);
      }
    }
    console.log("weight: " + w);
  }
  
}

class Path {
    constructor(length, curNode, visited, copy = null) {
        if (!copy) {
            this.length = length;
        this.curNode = curNode;
        this.visited = visited;
        } else {
            this.length = copy.length;
            this.curNode = copy.curNode;
            this.visited = visited;
        }
        

    }
}



console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Min Spanning Tree");
console.log("---------------------------------------");

let gr = [];
let ed = [];
let g = new graph_mst(gr, ed);
let v = 5;
let e = [[1, 1, 2],
         [1, 1, 3],
         [2, 2, 3],
         [3, 2, 4],
         [3, 3, 5],
         [2, 4, 5]
        ];

g.generate_graph(v, e);
console.log("Testing graph 1...");
g.print_graph();
let w = g.find_min_spanning_tree();
g.print_mst(w);

gr = [];
ed = [];
g = new graph_mst(gr, ed);
v = 7;
e = [
  [2, 1, 4],
  [1, 1, 3],
  [2, 1, 2],
  [1, 3, 4],
  [3, 2, 4],
  [2, 3, 5],
  [2, 4, 7],
  [1, 5, 6],
  [2, 5, 7]
];

g.generate_graph(v, e);
console.log("Testing graph 2...");
g.print_graph();
w = g.find_min_spanning_tree();
g.print_mst(w);
console.log("++++++ Test Done Successfully ++++++");