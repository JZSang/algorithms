/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    
    function swap(a, i, j) {
        [a[i], a[j]] = [a[j], a[i]];
    }
    
    
    function quickSelect(start, end) {
        let pivot = points[end];
    let i = start;
    for (let j = start; j < end; j++) {
        if (length(points[j]) <= length(pivot)) {
            swap(points, i++, j);
        }
    }
    swap(points,i,end);

        if (i === K - 1) {
            return;
        } else {
            
            if (i > K - 1) quickSelect(start, i-1)
            else quickSelect(i+1,end)
        }
        
    }
    quickSelect(0, points.length-1);
    let ans = [];
    for (let i = 0; i < K; i++) {
        ans.push(points[i]);
    }
    return ans;
    
    
};

function length(interval) {
    return (((interval[0] ** 2) + (interval[1] ** 2)) ** (1/2))
}