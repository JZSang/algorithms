/*

Good morning! Here's your coding interview problem for today.
This problem was asked by Airbnb.
Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
Follow-up: Can you do this in O(N) time and constant space?

*/

let A = [2,4,6,2,5];

console.log(solution(A));

function solution(array) {
    if (array.length === 0) return 0;
    if (array.length <= 2) return Math.max(...array);
    let prev = array[0];
    array[1] = Math.max(prev, array[1]);
    
    for (let i = 2; i < array.length; i++) {
        array[i] = Math.max(array[i-1], array[i-2] + array[i]);
    }
    return array[array.length-1];
}