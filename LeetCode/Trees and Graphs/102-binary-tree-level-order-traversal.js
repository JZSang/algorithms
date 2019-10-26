/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [root];
    let ans = []
    while (queue.length) {
        
        let length = queue.length;
        let array = [];
        for (let i = 0; i < length; i++) {
            let pop = queue.shift();
            if (pop === null) continue;
            queue.push(pop.left);
            queue.push(pop.right);
            array.push(pop.val);
        }
        if (array.length) ans.push(array);
        
        
    }
    return ans;
};