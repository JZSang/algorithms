/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    function preOrder(root) {
        if (root === null)return null;
        let temp = preOrder(root.right);
        let temp2 = preOrder(root.left);
        let t2 = temp2;
        if (t2) {
            while (t2.right) {
                t2 = t2.right
            }
            t2.right = temp;
        } else {
            temp2 = temp;
        }
        
        root.left = null
        root.right = temp2;
        return root;
    }
    
    preOrder(root);
};