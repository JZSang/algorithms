/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    if (answers.length === 1) return answers[0] + 1;
    
    let obj = {};
    answers.forEach((a) => {
        obj[a] = (obj[a] || 0) + 1;
    })
    let total = 0;
    for (let c in obj) {
        c = Number(c);
        let count = obj[c];
        total += (Math.ceil((count)/(c+1)) * (c+1));
        
    }
    return total;
};