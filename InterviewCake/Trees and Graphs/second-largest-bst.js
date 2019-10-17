class BinaryTreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }

function secondLargest(tree) {
    if (tree === null) return false;
    let parent = null;
    let head = tree;
    while (head.right) {
        parent = head;
        head = head.right;
    }
    if (parent === null && tree.left === null) return false;

    if (!head.left) return parent.val;

    head = head.left;

    while (head.right) {
        head = head.right;
    }

    return head.val;


}

let input = new BinaryTreeNode(50);
let two = input.insertLeft(30);
two.insertRight(40)
two.insertLeft(20);

let three = input.insertRight(80);
three.insertLeft(70);
three.insertRight(90);
console.log(secondLargest(input))