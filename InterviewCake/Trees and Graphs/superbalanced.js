
class BinaryTreeNode {
    constructor(value) {
      this.value = value;
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

function superbalanced(tree) {
    if (tree === null) return true;
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    function dfs(tree, height) {
        if (tree === null) {
            return;
        }
        if (tree.left === null && tree.right === null) {
            max = Math.max(height, max);
            min = Math.min(height,min);
        } else {
            dfs(tree.left, height+1)
            dfs(tree.right, height + 1);
        }
    }
    dfs(tree, 0)

    return Math.abs(max - min) <= 1;
}

let input = new BinaryTreeNode(1)
input.insertLeft(2).insertRight(3).insertLeft(5)
input.insertRight(4)
// console.log(input)
console.log(superbalanced(input));
