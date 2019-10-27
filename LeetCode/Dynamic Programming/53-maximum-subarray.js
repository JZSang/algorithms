/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let array = nums;
    let maxSoFar = array[0];
  let prev = array[0];
  for (let i = 1; i < array.length; i++) {
    let include = prev + array[i];
    if (include < array[i]) {
      prev = array[i];
    } else {
      prev = include;
    }
   maxSoFar = Math.max(maxSoFar, prev);
  }
  return maxSoFar;
    
};