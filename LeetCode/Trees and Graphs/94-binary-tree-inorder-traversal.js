/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


var inorderTraversal = function(root) {
    let ans = [];
    let stack = [];
    while (root) {
      stack.push(root);
      root = root.left;
    }

    while (stack.length) {
        let pop = stack.pop();
    let val = pop;
    pop = pop.right;
    if (pop) {
      while (pop) {
        stack.push(pop);
        pop = pop.left;
      }
    }
    ans.push(val.val);
    }
    return ans;
    
};

