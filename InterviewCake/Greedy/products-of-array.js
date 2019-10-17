
function getProductsOfAllIntsExceptAtIndex(array) {
    let array1 = [];
    let start = 1;
    for (let i = 0; i < array.length; i++) {
        start *= array[i];
        array1.push(start);
    }

    let array2 = [];
    start = 1;
    for (let i = array.length - 1; i>= 0; i--) {
        let temp = array[i];
        array[i] = (i - 1 >= 0 ? array1[i - 1] : 1) * start;
        start *= temp;
    }
    

    return array;
}

console.log(getProductsOfAllIntsExceptAtIndex([1,7,3,4]))