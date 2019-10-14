/*

Time:
O(n) for n length of array. We reverse from 0 to k and k + 1 to n. We also reverse from 0 to n.
So we have O(k/2 + (n-k-1)/2 + n / 2) =~ O(2n) = O(n)

Space:
We move in place therefore it is O(1).


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
