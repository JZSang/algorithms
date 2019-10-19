/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) return [];
    let arrayLeft = [];
    let arrayRight = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i += k) {
        let max = nums[i];
        let maxRight = Number.MIN_SAFE_INTEGER;
        for (let j = 0;j < k; j++) {
            if (i + j < nums.length) {
                if (nums[i+j] > max) {
                max = nums[i+j];
            } 
            arrayLeft.push(max);
            }
            
            if (i+k-j-1 >= nums.length) continue;
            if (nums[i + k - j - 1] > maxRight) {
                maxRight = nums[i+k-j-1];
            }
            arrayRight[i+k-j-1] = maxRight;
        }
    }
    let ans = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        ans.push(Math.max(arrayRight[i], arrayLeft[i+k-1]))
    }
    return ans;
    
    
};