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