/*

Good morning! Here's your coding interview problem for today.
This problem was asked by Uber.
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division?

*/


function answer(array) {
    let ans = new Array(array.length);

    let multiplier = 1;
    for (let i = 0; i< array.length; i++) {
        multiplier *= array[i];
        ans[i] = multiplier;
    }
    multiplier = 1;
    for (let i = array.length-1; i >= 0; i--) {
        ans[i] = (ans[i-1] ? ans[i-1] : 1) * multiplier;
        multiplier *= array[i];

    }
    return ans;
}

console.log(answer([1,2,3,4,5]))
console.log([120,60,40,30,24])