/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0;
    let j = nums.length-1;
    
    while (i <= j) {
        
        let mid = Math.floor((i+j + 1)/ 2);
        if (nums[i] === target) return i;
        if (nums[j] === target) return j;
        if (i === j) {
            if (nums[mid] === target) return mid
            return -1;
        } else if (nums[mid] <= nums[j]) {
            if (nums[mid] <= target && nums[j] >= target) {
                i = mid;
            } else {
                j = mid - 1;
            }
        } else if (nums[mid] >= nums[i]) {
            if (nums[mid] >= target && target >= nums[i]) {
                j = mid;
            } else {
                i = mid + 1;
            }
        }
    }
    return -1;
};