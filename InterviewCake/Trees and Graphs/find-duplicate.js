
function findDuplicate(array) {
    let pointer1 = 0;
    let pointer2 = 0;
    do {
        pointer1 = array[pointer1];
        pointer2 = array[array[pointer2]];
    } while (pointer1 !== pointer2);

    pointer1 = 0;

    while (pointer1 !== pointer2) {
        pointer1 = array[pointer1];
        pointer2 = array[pointer2];
    }

    return pointer1;

}

console.log(findDuplicate([4,4,3,8,5,2,6,1,7]))