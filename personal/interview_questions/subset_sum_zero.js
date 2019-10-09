/*
Given an array ‘arr’ consisting of integers, the task is to find the number of subsets such that their sum is equal to zero. Empty subset should also be considered.

Examples:

Input : arr[] = {2, 2, -4}
Output : 2
All possible subsets:
{} = 0
{2} = 2
{2} = 2
{-4} = -4
{2, 2} = 4
{2, -4} = -2
{2, -4} = -4
{2, 2, -4} = 0
Since, {} and {2, 2, -4} are only possible subsets
with sum 0, ans will be 2.



Input : arr[] = {1, 1, 1, 1}
Output : 1
{} is the only possible subset with
sum 0, thus ans equals 1.
*/

var subsets = function(nums) {
    if (nums.length === 0) {
        return [[]];
    }
    
    let first = nums[0];
    let perms = [];
    let permutation = subsets(nums.slice(1));
    
    for (let perm of permutation) {
        perms.push(perm);
        let newPerm = perm.slice();
        newPerm.push(first);
        perms.push(newPerm);
    }
    
    return perms;
};

let sumZero = function(nums) {
    let power = subsets(nums);
    let sets = [];
    for (let i = 0; i < power.length; i++) {
        let sum = 0;
        for (let j = 0; j < power[i].length; j++){
            sum += power[i][j];
        }
        if (sum === 0) {
            sets.push(power[i]);
        }
    }
    return sets;
}

console.log(sumZero([2, 2, -4]))