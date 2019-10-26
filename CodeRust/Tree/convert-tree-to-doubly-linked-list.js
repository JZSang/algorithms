class List {
    constructor(val) {
      this.data = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  let convert_to_linked_list = function(root) {
    if (root === null) return null;
    let left = convert_to_linked_list(root.left);
    let right = convert_to_linked_list(root.right);
    let newNode = new List(root.val);
    if (left) left.next = newNode;
    if (right) right.prev = newNode;
    newNode.prev = left;
    newNode.next = right;
    return newNode;
  };

class BST {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let node = new BST(1, new BST(0, new BST(-1)), new BST(2, null, new BST(3)));

let conv = convert_to_linked_list(node);
while (conv.prev) {
    conv = conv.prev;
}
while (conv) {
    console.log(conv.data);
    conv = conv.next;
}
