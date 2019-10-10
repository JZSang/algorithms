/*


*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let start = k % nums.length;
    
    nums.reverse();
    reverse(nums, 0, start-1);
    reverse(nums, start, nums.length-1);
    
};

function reverse(nums, i, j) {
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}

function swap(nums,i,j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
