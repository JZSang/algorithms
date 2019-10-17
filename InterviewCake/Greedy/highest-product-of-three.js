
function highestProduct(arrayOfInts) {
    let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

    let highestProductOf2 = highest * lowest;
    let lowestProductOf2 = highest * lowest;

    let highestProductOf3 = highest * lowest * arrayOfInts[2];

    for (let i = 2; i < arrayOfInts.length; i++) {
        let cur = arrayOfInts[i];
        highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * cur, lowestProductOf2 * cur);

        highestProductOf2 = Math.max(highestProductOf2, cur * highest, cur * lowest);
        lowestProductOf2 = Math.min(lowestProductOf2, cur * highest, cur * lowest);

        highest = Math.max(cur, highest)
        lowest = Math.max(cur, lowest);

    }
    return highestProductOf3

}

console.log(highestProduct([1,10,-5,1,-100]));