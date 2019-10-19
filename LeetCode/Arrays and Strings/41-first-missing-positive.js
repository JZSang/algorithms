/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 >= nums.length || nums[i] - 1 < 0) continue;
        if (nums[i] === i + 1) continue;
        let temp = nums[nums[i] - 1];
        let index = nums[i];
        while (true) {
            nums[index - 1] = index;
            if (temp - 1 >= nums.length || temp - 1 < 0) break;
            index = temp;
            if (temp === nums[index-1]) break;
            temp = nums[index - 1];
        }
        
        
        
        
    }
    let i = 0;
        let min = 1;
        while (i + 1 === nums[i]) {
            min++;
            i++;
        }
    return min;
    
};