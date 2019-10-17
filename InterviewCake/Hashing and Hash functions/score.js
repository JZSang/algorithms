
function sortScores(unsortedScores, highestScore) {
    let array = new Array(highestScore + 1);
    for (let c of unsortedScores) {
        array[c] = (array[c] || 0) + 1;
    }
    let sorted = [];
    for (let i = array.length-1; i >= 0; i--) {
        for (let j = 0; typeof array[i] === "number" && j < array[i]; j++) {
            sorted.push(i);
        }
    }
    return sorted;
}


let tests =
[[[37, 89, 41, 65, 91, 53], 100]]


for (let c of tests) {
    console.log(sortScores(...c));
}