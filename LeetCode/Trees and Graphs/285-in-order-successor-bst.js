/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let d = p.val;
  let parent = null;
  let node = root;
  while (true) {
    if (node.val === d) {
      break;
    } else if (node.val > d) {
      if (node.val >= d) parent = node;
      node = node.left;
    } else {
      node = node.right;
    }
  }

  if (parent && parent.val < node.val && node.val === null) {
    return null;
  }
  if (!parent && !node.right) {
    return null
  }

  let inSuccessor = node.right;
  if (node.right === null) {
    return parent;
  } else {
    while (inSuccessor.left) {
      inSuccessor = inSuccessor.left;
    }
    return inSuccessor;
  }


  return null;
};