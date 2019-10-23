function sort(array) {

    function swap(i, j){
        [array[i], array[j]] = [array[j], array[i]];
    }

    function quickSort(i, j) {
        if (i >= j) return;
        let pivot = array[j];
        let start = i;
        let k = i;
        while (k < j) {
            if (array[k] < pivot) {
                swap(start++, k);
            }
            k++;
        }
        swap(start, j);
        quickSort(i, start-1);
        quickSort(start+1, j);
    }

    quickSort(0, array.length-1);
}


let A = [1,7,3,7,9,7,5,3,5,7,8,5];

sort(A)

console.log(A);