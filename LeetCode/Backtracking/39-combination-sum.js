/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let ans = [];
    function dfs(i, sum,array) {
        if (sum > target) {
            return;
        } else if (sum === target) {
            ans.push(array.slice());
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            array.push(candidates[j]);
            dfs(j, candidates[j] + sum, array);
            array.pop();
        }
    }
    dfs(0, 0, []);
    return ans;
};