/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let ans = [];
    function generate(string, i, j) {
        if (i === 0 && j === 0) {
            ans.push(string);
            return;
        }
        if (i < j) {
            
            generate(string + ")", i, j-1);
        }
        if (i> 0) generate(string + "(", i-1, j);
    }
    generate("", n, n)
    return ans;
};