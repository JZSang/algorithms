/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0;
    let j = nums.length-1;
    
    while (i < j) {
        let mid = Math.floor((i+j)/2);
        
        if (nums[mid] < target) {
            i = mid + 1;
        } else {
            j = mid
        }
    }
    let min = i;
    
    i=0;
    j=nums.length-1;
    while (i < j) {
        let mid = Math.floor((i+j+1)/2);
        
        if (nums[mid] > target) {
            j = mid - 1;
        } else {
            i = mid;
        }
    }
    
    let max = i
    
    return nums[max] === nums[min] && nums[max] === target ? [min,max] : [-1,-1];
};