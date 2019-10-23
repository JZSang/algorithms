/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let set = new Set();
    
    nums.sort((a,b) => {
        return a-b;
    })
    
    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        while (set.has(nums[i])) i++;
        let add = -nums[i];
        let j = i + 1;
        let k = nums.length - 1;
        let visitedSet = new Set();
        while (j < k) {
            if (nums[j] + nums[k] === add && !visitedSet.has(nums[j]) && !visitedSet.has(nums[k])) {
                visitedSet.add(nums[j]);
                visitedSet.add(nums[k]);
                ans.push([nums[i],nums[j],nums[k]]);
            }
            if (nums[j] + nums[k] < add) {
                j++;
            } else {
                k--;
            }
        }
        set.add(nums[i]);
        
    }
    return ans;
    
};