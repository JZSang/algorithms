/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let a = nums;
    if (nums.length === 0) return 0;
    if (nums.length <= 2) return Math.max(...nums);
    let maxSum = Math.max(a[0], a[1]);
    a[1] = maxSum;

  for (let i = 2; i < a.length; i++) {
    a[i] = Math.max(maxSum, a[i] + a[i-2]);
    maxSum = a[i];
  }
  
  return maxSum;
};