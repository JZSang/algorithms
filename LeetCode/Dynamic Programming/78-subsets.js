/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

Time:
We have n as the length of nums.
Each time we pop off a number, we look at the length of perms and double it. If we have 2 nums, we will have 4.
If we have 5 nums, we will have 32.
Therefore, there are 2^n loops.
Since perms[i].slice() will be often O(n), we can consider the time complexity to be about O(2^n * n).

Space:
O(2^n * n) as we will have 2^n arrays in perms each often of length n.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let perms = [[]];
    while (nums.length) {
        let length = perms.length;
        let first = nums.pop();
        for (let i = 0; i < length; i++) {
            let d = perms[i].slice();
            d.push(first);
            perms.push(d);
        }
    }
    return perms;
};