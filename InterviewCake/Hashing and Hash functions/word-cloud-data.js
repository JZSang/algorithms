
function wordCloud(sentence) {
    const string = "abcdefghijklmnopqrstuvwxyz-'".split("");
    let set = new Set(string);

    let i = 0;
    let j = 0;

    let map = new Map();
    while (i < sentence.length && j < sentence.length) {
        while (j < sentence.length && set.has(sentence[j].toLowerCase())) j++;
        let word = sentence.slice(i, j);
        word = word.toLowerCase();
        map.set(word, (map.get(word) || 0) + 1);
        while (j < sentence.length && !set.has(sentence[j].toLowerCase())) j++;
        i = j;
    }
    return map;
}

let tests = 
[[  "After beating the eggs, Dana read the next step:"],
["Add milk and eggs, then add flour and sugar."],
[  "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
],
["The bill came to five dollars."
]]

for (let c of tests) {
    console.log(wordCloud(...c));
}