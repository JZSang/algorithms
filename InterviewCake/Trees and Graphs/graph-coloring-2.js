class GraphNode {
    constructor(label) {
      this.label = label;
      this.neighbors = new Set();
      this.color = null;
    }
  }
  
  const a = new GraphNode('a');
  const b = new GraphNode('b');
  const c = new GraphNode('c');
  const d = new GraphNode('d');
  const e = new GraphNode('e');
  const f = new GraphNode('f');
  
  a.neighbors.add(b);
  a.neighbors.add(c);
  c.neighbors.add(a);
  c.neighbors.add(e);
  c.neighbors.add(d);
  c.neighbors.add(f);
  e.neighbors.add(c);
  f.neighbors.add(c);
  d.neighbors.add(c);
  f.neighbors.add(e);
  e.neighbors.add(f);
  a.neighbors.add(f);
  f.neighbors.add(a);
  b.neighbors.add(a);
  
  c.neighbors.add(b);
  b.neighbors.add(c);
//   c.neighbors.add(a);
//   a.neighbors.add(c);
  
  const graph = [a, b, c,d,e,f];

function graphColoring(graph, d) {
    let maximumDegree = d + 1;
    for (let c of graph) {
        let illegalColors = new Set();
        for (let neighbor of c.neighbors) {
            if (neighbor.color) {
                illegalColors.add(neighbor.color); // add colors we can't use
            }
        }
        for (let i = 1; i <= maximumDegree; i++) {
            if (!illegalColors.has(i)) { // color not found in illegal colors, use it
                c.color = i;
                break; // this actually changes our big O!
            }
        }
        // our check is worst case neighbors + 1, so it's not dependent on the number d.
    }
    return graph;
}

console.log(graphColoring(graph, 3))