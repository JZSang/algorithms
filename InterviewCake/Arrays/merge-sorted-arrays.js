function mergeArrays(array1, array2) {
    let array = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) {
            array.push(array1[i]);
            i++
        }  else {
            array.push(array2[j]);
            j++
        }
    }
    if (i >= array1.length) {
        for (let k = j; k < array2.length; k++) {
            array.push(array2[k])
        }
    } else if (j >= array2.length) {
        for (let k = i; k < array2.length; k++) {
            array.push(array1[k])
        }
    }
    return array;
}



  const myArray = [3, 4, 6, 10, 11, 15];
  const alicesArray = [1, 5, 8, 12, 14, 19];
  
  console.log(mergeArrays(myArray, alicesArray));
  // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]