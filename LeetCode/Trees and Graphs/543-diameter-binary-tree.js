/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (root === null)return 0;
    let max = 0;
    function diameter(root) {
        if (root === null) {
            return 0;
        } else {
            let left = diameter(root.left);
            let right = diameter(root.right);
            
            max = Math.max(max, left + right + 1);
            let leftOrRightMax = Math.max(left,right);
            return leftOrRightMax + 1;
        }
    }
    diameter(root);
    return max-1;
};