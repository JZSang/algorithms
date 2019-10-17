
function isOrders(takeout, dinein, served) {
    let i = 0;
    let j = 0;
    for (let k = 0; k < served.length; k++) {
        if (i < takeout.length && takeout[i] === served[k]) {
            i++;
        } else if (j < dinein.length && dinein[j] === served[k]) {
            j++;
        } else {
            return false;
        }
    }

    // Check for end orders of served.
    return true;
}

let takeout = [];
let dinein = [2,4,6];
let served = [2,6,4];

console.log(isOrders(takeout,dinein,served));