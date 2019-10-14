import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Queue;

/*
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

/**
 * main
 */

 public class Main {

    public static void main(String[] args) {
        int[] nums = {1, 2, 3};

        ArrayList<ArrayList<Integer>> subsets = new ArrayList<ArrayList<Integer>>();
        subsets.add(new ArrayList<Integer>());
        for (int i = 0; i < nums.length; i++) {
            int length = subsets.size();
            for (int j = 0; j < length; j++) {
                ArrayList<Integer> copy = (ArrayList<Integer>) subsets.get(j).clone();
                copy.add(nums[i]);
                subsets.add(copy);
            }
        }
        System.out.println(subsets);

    }
}