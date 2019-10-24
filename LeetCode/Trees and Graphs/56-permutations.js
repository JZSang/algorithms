/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let set = new Set();
    let visited = new Set();
    for (let i = 0 ; i < nums.length; i++) {
        set.add(nums[i]);
    }
    let ans = [];
    function dfs(array) {
        if (array.length === nums.length) {
            ans.push(array.slice());
            return;
        }
        for (let c of set) {
            // console.log(set,c,visited,array);
            if (visited.has(c)) continue;
            array.push(c);
            visited.add(c);
            dfs(array);
            visited.delete(c);
            array.pop();
        }
    }
    
    dfs([]);
    
    return ans;
};