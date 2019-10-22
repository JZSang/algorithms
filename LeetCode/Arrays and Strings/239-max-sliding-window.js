/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {   
    if (nums.length === 0) return nums;
    let doubleEnded = [];
    
    
    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        if ((i-k) >= 0 && nums[i - k] === doubleEnded[0]) {
            doubleEnded.shift();
        }
        let current = nums[i];
        for (let j = doubleEnded.length-1; j >= 0; j--) {
            if (current > doubleEnded[j]) {
                doubleEnded.pop();
            } else {
                break;
            }
        }
        doubleEnded.push(current);
        if (i >= k - 1) ans.push(doubleEnded[0]);
    }
    
    return ans;
    
    
};