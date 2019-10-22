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
var lowestCommonAncestor = function(root, p, q) {
    let queue = [root];
    
    while (queue.length > 0) {
        let pop = queue.pop();
        if (pop === null) continue;
        if ((p.val <= pop.val && q.val >= pop.val) || (p.val >= pop.val && q.val <= pop.val)) {
            return pop;
        } else {
            if (p.val >= pop.val) {
                queue.push(pop.right)
            } else {
                queue.push(pop.left);
            }
        }
    }
    return root;
};