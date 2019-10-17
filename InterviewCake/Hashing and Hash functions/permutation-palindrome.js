


function permutationPalindrome(string){
    let count = {};
    for (let c of string) {
        count[c] = (count[c] || 0) + 1;
    }

    let foundZeroOrOneOdd = 1;
    for (let i in count) {
        if (count[i] % 2 === 1) {
            if (!foundZeroOrOneOdd) return false;
            foundZeroOrOneOdd = 0;
        }
    }

    return true;

}


let tests = [["civic"], ["ivicc"], ["civil"], ["livci"], ["llvv"]]; // true true false false true

for (let c of tests) {
    console.log(permutationPalindrome(...c));
}