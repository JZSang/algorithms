/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let array = ["fail"];
    function dfs(node) {
        if (node === null) {
            array.push("-|");
        }  
        if (node !== null) {
            array.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
    }

    dfs(root);
    return array.join("#");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let array = data.split("#");
    if (array[1] === "-|") return null;
    array.shift();
    
    function dfs() {
        let elem = array.shift();
        if (elem === "-|") {
            return null;
        }
        elem = new TreeNode(elem);
        elem.left = dfs();
        elem.right = dfs();
        
        return elem;
    }
    


    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */