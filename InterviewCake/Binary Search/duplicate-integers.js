

function duplicates(array) {
    let range = Math.floor(array.length / 2);

    let i = 0;
    let j = array.length - 1;

    let countUnder = 1;
    let countUpper = array.length - 1;
    while (countUnder < countUpper) {
        let count = 0;
        let mid = Math.floor((countUnder+countUpper) / 2);
        let number = mid - countUnder + 1; // How many should ACTUALLY be under here if there were no duplicates
        for (let k = i; k <= j; k++) {
            if (array[k] <= mid && array[k] >= countUnder) count++;
        }
        if (count > number) {
            countUpper = mid;
        } else {
            countUnder = mid+1;
        }
    }
    return countUnder;
}

console.log(duplicates([1,3,2,5,4,7,2,6]));