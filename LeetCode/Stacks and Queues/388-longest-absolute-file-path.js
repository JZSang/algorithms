/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    let split = input.split("\n");
    function tabCount (word) {
        let i = 0;
        let total = 0;
        while (i < word.length && word[i] === '\t') {
            total++;
            i++;
        }
        return total;
        
    }
    
    let stack = [];
    let max = 0;
    for (let i = 0; i < split.length; i++) {
        let tabs = tabCount(split[i]);
        let length = split[i].length - tabs;
        while (stack.length > tabs) stack.pop();
        let newLength = split[i].length + (stack[stack.length-1] || -1) + 1 - tabs;
        stack.push(newLength);
        if (split[i].includes(".")) max = Math.max(max, newLength);
        
    }
    return max;
};