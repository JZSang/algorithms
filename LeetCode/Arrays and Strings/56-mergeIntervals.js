/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

 
// Given a collection of intervals, merge all overlapping intervals.


/*
PseudoCode:
Define "ending" as the 1st index of a an interval. "Beginning": 0th
    1. Sort
        a. Sort first by the 0th index, then if the 0th index is equal, sort by the 1st index
        b. Allows us to find the largest ending index for a specific beginning value. i.e. [[1,2], [1,3]. Gets us [1,3] easily
        c. All of the 0th indexes that could be in our intervals are adjacent to each other
        ex. [[1,2],[2,3],[2,4],[3,4]] => 1,2 begins => 2 >= 2 => 1,3 new interval => 3 >= 2 => 1,4 new interval
        If they were out of order, we would need O(N^2) comparisons to find it all. Here it's O(NLogN)
    2. Greedy
        a. With everything sorted, we can just linearly search through

Time:
Define n as the length of intervals
O(n * Log n). We use built in sort to sort all the intervals which is standard n * logn. Then we loop through it n times.

Space:
O(n) where n is the number of intervals. Our return array could be the exact same elements as our intervals array.

*/
// O(NLogN) - Sorting | second part is linear search 
var merge = function(intervals) {
    
    if (!intervals.length) {
        return [];
    }

    intervals.sort((a,b) => {
        if (a[0] - b[0] === 0) {
            return a[1] - b[1] < 0 ? -1 : 1;
        } else {
            return a[0] - b[0];
        }
    })

    let newIntervals = [];
    let currentBeginning = intervals[0][0];
    let currentEnding = intervals[0][1];
    
    // The first check of the 0th index exists only to get the 2nd if statement to run for 1 length arrays.
    for (let i = 0; i < intervals.length; i++) {
        let currentInterval = intervals[i];

        // If the ending we had before overlaps this interval's beginning, we'll take the largest ending we can get because
        //   There is an overlap
        if (currentEnding >= currentInterval[0]) {
            currentEnding = Math.max(currentEnding, currentInterval[1]);
            
        } else {
            // No overlap => our greedy algorithm says this is completed as every "beginning" will be larger
            // since we have sorted the array
            newIntervals.push([currentBeginning, currentEnding])

            // This is the next lowest interval, so we'll start using this.
            currentBeginning = currentInterval[0];
            currentEnding = currentInterval[1];
        }

        // If it's the last one, we are done, there's no point building it up. 
        // newIntervals normally gets a push only when we have confirmed there are no overlaps.
        if (i >= intervals.length - 1) {
                newIntervals.push([currentBeginning, currentEnding]);
        }
        
    }
    return newIntervals;
    
    
};