# All Combinations
## Examples
Generally these types of equations are a bit like 
- Return the power set
- Subsets sum problem
- Backtracking-like problems
  - Combinations of strings

## Strategy

### Power sets
The best way to visualise an answer is to enumerate the most obvious possibility.

> Consider returning the power set. The most obvious case can either be the empty set or the largest subset (which is the entire array itself).

We choose the empty set. 

```
[1, 2, 3] => [[]] - the set so far
```
Loop the array and we will push one element to each element of the set (which so far only contains the empty set)
```
[1, 2, 3] => [[]] => [[], [1]]
```
Do this for each element.
```
[1, 2, 3] => [[], [1], [2],[1, 2]]
```
```
[1, 2, 3] => [[], [1], [2], [1, 2], [3], [1,3], [2,3], [1,2,3]]
```
Then it just looks like we are using the initial [1,2,3] array as a queue.

```javascript
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
```
```javascript
function subsets(nums) {
    let perms = [];
    function dfs(j, current) {
        perms.push(current.slice());
        if (j >= nums.length) return;
        for (let i = j; i < nums.length; i++) {
            current.push(nums[i]);
            dfs(i+1, current);
            current.pop();
        }
    }
    dfs(0, []);
    return perms;
}
```
```javascript
function subsets(nums) {
    let perms = [];
    function dfs(j, current) {
        if (j !== 0) perms.push(current.slice());
        if (j >= nums.length) return;
        current.push(nums[j]);
        dfs(j+1, current);
        current.pop();
        dfs(j+1, current);
    }
    dfs(0, []);
    return perms;
}
```

### All subsets that sum to zero
Following what we learnt above, let's enumerate the most obvious possibility that we should check: the empty set or the entire set. 

> Following the empty set method, we would just augment the above function to sum together.

Entire set?

Check if we have the entire set, including the last -3.
```
[1,2,-3]
```
Check is this sums entirely to 0. Add to answer if so. Now check if we didn't have the -3.
```
[1,2]
```
Then check if we didn't have the 2 but did have the -3
```
[1,-3]
```
Then check if we didn't have the 2 and the -3
```
[1]
```
Then check if we didn't have the 1, but had the 2 and -3
```
[2, -3]
```
Then check have 2 but no -3
```
[2]
```
Then check no 2 but has -3
```
[-3]
```
Then check nothing
```
[]
```
2^3 is 8, so we have checked all possibilities (that's the formula for number of sets in a power set)

What's clear hear is a backtracking algorithm. Check if we did have and check if we didn't have. This is over 2^n checks as we said. 



