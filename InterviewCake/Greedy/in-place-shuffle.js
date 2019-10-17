


function shuffleWrap(array) {
    let i = 0;
    function shuffle(array, start, end) {
        if (start >= end) return;
        let mid = getRandom(start, end);
        [array[i], array[mid]] = [array[mid], array[i]]
        i++;
        shuffle(array, i, end);
    }

    shuffle(array, 0, array.length);
    return array;
}

function getRandom(floor,ceiling) {
    return floor + Math.floor((ceiling - floor) * Math.random());
}

console.log(shuffleWrap([1,2,3,4]));