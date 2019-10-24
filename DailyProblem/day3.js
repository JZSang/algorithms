/*

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
For example, given the following Node class
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'

*/

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    let array = [null];
    function dfs(node, i) {
        array[i] = node;        
        if (node !== null) {
            array[i] = node.val;
            dfs(node.left, 2 * i);
            dfs(node.right, 2 * i + 1);
        }
    }

    dfs(root, 1);
    
    return array;

}
let ser = serialize(new Node(1, new Node(2, new Node(4)), new Node(3, null, new Node(5))));
console.log(ser);

function deserialize(array) {
    let node = new Node(array[1]);

    function dfs(node, i) {
        let left = array[i*2] === null ? null : new Node(array[i*2]);
        let right = array[i*2+1] === null ? null : new Node(array[i*2 + 1]);
        node.left = left;
        node.right = right;
        if (left) dfs(node.left, i * 2);
        if (right) dfs(node.right, i * 2 + 1);
    }

    dfs(node, 1);

    return node;
}

console.log(deserialize(ser));


// Alternative

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