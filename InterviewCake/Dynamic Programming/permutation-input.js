

function permutations(string) {
    let set = new Set();
    const count = {};
    for (let i = 0; i < string.length; i++) {
        count[string[i]] = (count[string[i]] || 0) + 1;
    }
    function backtrack(i, word) {
        if (i === string.length) {
            set.add(word);
            return;
        }
        for (let c in count) {
            if (count[c] === 0) continue;
            count[c]--;
            backtrack(i + 1, word + c);
            count[c]++;
        }
    }
    backtrack(0, '');
    return set;
}

console.log(permutations("all"))