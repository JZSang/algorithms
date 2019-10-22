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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let ancestor = null;
var lowestCommonAncestor = function(root, p, q) {
    let anc = root;
    function dfs(node, p, q) {
        if (node === null) {
            return false;
        } else {
            let left = dfs(node.left, p, q);
            let right = dfs(node.right,p,q);
            if ((left && right)) {
                anc = node;
                return false;
            } else if ((right || left) && (node === p || node === q)) {
                anc = node;
                return false;
            } else if (right || left) {
                return true;
            }
            if (node === p) return true;
            if (node === q) return true;
            
        }
    }
    
    dfs(root, p,q);
    return anc;
    
}