/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) return true;
    let count = 1;
    let j = nums.length-2;
    while (j >= 0) {
        
        if (nums[j] < count) {
            count++;
            j--;
        } else {
            count = 1;
            j--;
        }
    }
    return count > 1 ? false : true;
};