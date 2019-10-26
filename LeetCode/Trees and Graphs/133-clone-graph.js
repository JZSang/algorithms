/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let root = node;
    let visited = new Set();
    let queue = [root];
  
    let hash = {};
  
    while (queue.length) {
      let dequeue = queue.shift();
      if (visited.has(dequeue.val)) continue;
      visited.add(dequeue.val);
      hash[dequeue.val] = hash[dequeue.val] || new Node(dequeue.val, []);
  
      for (let c of dequeue.neighbors) {
          queue.push(c);
          let clone = new Node(c.val, []);
          hash[dequeue.val].neighbors.push(hash[c.val] || clone);
        hash[c.val] = hash[c.val] || clone;
      }
    }
    return hash[root.val];
    
};