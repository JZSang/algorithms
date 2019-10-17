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


function checker(tree) {

    function dfs(tree, left, right) {
        if (tree === null) return true;
        if (left <= tree.val && right >= tree.val) {
            return dfs(tree.left, left, tree.val) && dfs(tree.right, tree.val, right);
        } else {
            return false;
        }
    }

    return dfs(tree, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}


let input = new BinaryTreeNode(50);
let two = input.insertLeft(30);
two.insertRight(40)
two.insertLeft(20);

let three = input.insertRight(80);
three.insertLeft(70);
three.insertRight(90);
console.log(checker(input))