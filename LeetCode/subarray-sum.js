function subArraySum(arr, sum) {
    let obj = {0: 0};
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        if (total - sum in obj) {
            return [obj[total-sum], i];
        }
        obj[total] = i + 1;
    }
}

function subArraySum2(arr, sum) {
    let i = 0;
    let j = 1;

    let sume = arr[i] + arr[j];
    while (j < arr.length && i < arr.length) {
        if (sume === sum) {
            return [i,j]
        }
        if (j - 1 === i) {
            j++;
            sume += arr[j];
        } else if (sume > sum) {
            sume -= arr[i];
            i++;
        } else {
            j++;
            sume += arr[j];
        }
    }
}

let arr = [15, 2, 4, 8, 9, 5, 10, 23];

console.log(subArraySum2(arr, 39))