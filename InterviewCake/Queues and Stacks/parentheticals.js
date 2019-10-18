function parentheticals(sentence, pos) {
    let number = 0;

    for (let i = pos ; i < sentence.length; i++) {
        if (sentence[i] === '(') {
            number++;
        } else if (sentence[i] === ')') {
            number--;
            if (number < 0) throw new Error("Sentence is not grammatically sound.");
        }
        if (number === 0) return i;
    }
    return null;
}
let string = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
let pos = 10;
console.log(getClosingParen(string, pos))