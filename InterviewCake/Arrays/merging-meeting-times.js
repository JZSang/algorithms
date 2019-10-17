function mergeRanges(meetings) {
    let ret = [];

    meetings.sort((a,b) => {
        return a.startTime - b.startTime;
    })


    let current = meetings[0];

    ret.push(meetings[0]);

    for (let i = 1; i < meetings.length; i++) {
        if (current.endTime >= meetings[i].startTime) {
            current.endTime = Math.max(current.endTime, meetings[i].endTime);
        } else {
            current = meetings[i];
            ret.push(meetings[i]);
        }
    }

    return ret;

}
let input  =       [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]
console.log(mergeRanges(input))
