


function isTwoMovies(flightLength, movieLengths) {
    let lengths = new Set();
    for (let c of movieLengths) {
        if (lengths.has(flightLength - c)) {
            return true;
        }
        lengths.add(c);
    }
    return false;
}

let tests = [
    [[7], [1,2,3,4]],
 [[1], [2,3,4]],
[[2], [1,1]]];


for (let c of tests) {
    console.log(isTwoMovies(...c));
}