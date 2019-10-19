/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Time:
O(n) as our process ends as i > j and since i++ and j--, we can only traverse as a one pass

Space:
O(1) no arrays are saved and only two pointers are used

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let j = height.length-1;
    let currentLeftMax = 0;
    let currentRightMax = 0;
    let total = 0;
    while (i <= j) {
        if (currentLeftMax >= currentRightMax) {
            let add = currentRightMax - height[j];
            if (add > 0) {
                total += add;
            }
            currentRightMax = Math.max(currentRightMax, height[j]);
            j--;
        } else {
            let add = currentLeftMax - height[i];
            if (add > 0) {
                total += add;
            }
            currentLeftMax = Math.max(currentLeftMax, height[i])
            i++;
            
        }
        
        
    }
    return total;
};