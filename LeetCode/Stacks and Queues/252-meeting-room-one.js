/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length === 0) return true;
    intervals.sort((a,b) => {
        return a[0] - b[0];
    })
    
    
    let next = intervals[0][1];
    for (let i = 1;i < intervals.length; i++) {
        if (intervals[i][0] < next) {
            return false;
        } else {
            next = intervals[i][1];
        }
    }
    return true;
};