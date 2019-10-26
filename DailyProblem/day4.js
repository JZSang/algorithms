/*

Good morning! Here's your coding interview problem for today.
This problem was asked by Stripe.
Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
You can modify the input array in-place.
*/

function missing(array) {
    let foundOne = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            foundOne = true;
        }
    }
    if (!foundOne) return 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            array[i] = 1;
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i]) <= array.length && array[Math.abs(array[i])-1]> 0) {
            array[Math.abs(array[i])-1] = -array[Math.abs(array[i])-1];
        }
    }
    let count = 0;
    let i = 0;
    while (array[i] < 0) {
        count++;
        i++;
    } 
    return count+1;
}
let ans = [1,8,2,7,8,4,6,4,2,5,3]
console.log(missing(ans))