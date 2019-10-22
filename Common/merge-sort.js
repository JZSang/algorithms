
function mergeSort(array) {
    function merge(i,j) {
        if (i >= j) {
            return;
        }
        let mid = Math.floor((i+j)/2);
        merge(i, mid);
        merge(mid+1, j);
        let sort = [];
        let k = i;
        let oldMid = mid;
        mid = mid + 1;
        while (k <= oldMid && mid <= j) {
            if (array[k] <= array[mid]) {
                sort.push(array[k++]);
            } else {
                sort.push(array[mid++]);
            }
        }
        for (; k <= oldMid; k++) {
            sort.push(array[k]);
        }
        for (; mid <= j; mid++) {
            sort.push(array[mid]);
        }
        for (let m = 0; m < sort.length; m++) {
            array[i + m] = sort[m];
        }
        
    }

    merge(0, array.length-1)
}

let array = [9,8,7,6,5,4,3,2,1];

mergeSort(array);
console.log(array);

