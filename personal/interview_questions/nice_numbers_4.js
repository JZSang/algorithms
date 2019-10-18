// wish

function niceNumbers(array) {
    let n = array.length;
    let arr = [];
    let set = new Set();
    for (let k = Math.floor(n/4); k < array.length; k += Math.floor(n/4)) {
        if (set.has(array[k])) continue;
        let check = array[k];
        set.add(check);
        let i = 0;
        let j = n-1;
        while (i < j) {
            // console.log(i,j)
            let mid = Math.floor((i + j) / 2);
            if (i + 1 === j) {
                break;
            }
            if (array[mid] <= check) {
                i = mid;
            } else {
                j = mid;
            }
        }
        let high = j - 1;
        i = 0;
        while (i < j) {
            let mid = Math.floor((i+j)/ 2);
            // console.log(i,j)
            if (i + 1 === j) break;
            if (array[mid] < check) {
                i = mid;
            } else {
                j = mid;
            }
        }
        let low = j;
        if (high - low + 1 > Math.floor(n/4)) {
            arr.push(check);
        }

    }
    return arr;
}

console.log(niceNumbers([1,3,3,3,4,5,6,7,8,9,10]));