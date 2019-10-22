/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i = 0;
    let j = nums.length-1;
    
    while (i < j) {
        let mid = Math.floor((i+j)/2);
        if (nums[mid] >= nums[j]) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    return nums[i];
};