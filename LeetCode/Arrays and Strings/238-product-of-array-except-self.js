/*

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

Time:
Two passes of the array with O(1) operations => O(n) where n is the length of the array

Space:
Assuming we do NOT care about the return answer array it is O(1). We only change the values inside answer.

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [];
    let total = 1;
    for (let i = 0; i < nums.length-1; i++) {
        total *= nums[i];
        answer[i] = total;
    }
    let total2 = 1;
    for (let i = nums.length-1; i >=0 ;i--) {
        if (i === 0) {
            answer[i] = total2;
        } else answer[i] = answer[i-1] * total2;
        total2 *= nums[i];
    }
    return answer;
};