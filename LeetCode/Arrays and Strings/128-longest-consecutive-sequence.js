/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;
    let visited = new Set();
    for (let c of set) {
        let total = 0;
        if (visited.has(c)) continue;
        visited.add(c);
        total++;
        if (set.has(c+1)) {
            let d = c+1;
            while (set.has(d)) {
                visited.add(d);
                total++;
                d++;
            }
        }
        if (set.has(c-1)) {
            let d = c-1;
            while (set.has(d)) {
                visited.add(d);
                total++;
                d--;
            }
        }
        longest = Math.max(total, longest);
    }
    return longest;
};