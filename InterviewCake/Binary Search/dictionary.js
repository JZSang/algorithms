
function rotationPoint(words) {
    let i = 0;
    let j = words.length-1;
    while (i < j) {
        let length = j - i;
        let mid = Math.floor((j-i) / 2);
        mid = i + mid;
        if (words[mid] <= words[j]) {
            j = mid;
        } else {
            i = mid + 1; // we do this as, if mid is STRICTLY larger, then it is definitely not the smallest so we don't need to care about it.
        }
        if (i >= j) return i;
    }
}

console.log(rotationPoint([
    'b','e','a'
  ]));