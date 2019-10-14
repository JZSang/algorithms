# /*
# Given a set of distinct integers, nums, return all possible subsets (the power set).

# Note: The solution set must not contain duplicate subsets.

# Example:

# Input: nums = [1,2,3]
# Output:
# [
#   [3],
#   [1],
#   [2],
#   [1,2,3],
#   [1,3],
#   [2,3],
#   [1,2],
#   []
# ]
# */

def subsets(nums):
    subsets = [[]]

    for e in nums:
        length = len(subsets)
        for s in range(length):
            new_s = subsets[s].copy()
            new_s.append(e)
            subsets.append(new_s)
    return subsets

print(subsets([1,2,3]))