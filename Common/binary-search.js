function binarySearch(array, k) {
    let i = 0;
    let j = array.length-1;

    while (i <= j) {
        let mid = (Math.floor((i+j+1)/2));

        if (array[mid] === k) {
            return mid;
        } else if (array[mid] > k) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
    return null;
}

let A = [1,5,8,15,20,50];

console.log(binarySearch(A,9) === nunll);