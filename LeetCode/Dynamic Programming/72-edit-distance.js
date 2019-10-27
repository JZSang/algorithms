/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let distance = new Array(word1.length + 1);
    for (let i = 0; i < distance.length; i++) {
        distance[i] = new Array(word2.length + 1);
    }
    for (let i = 0; i < distance.length; i++) {
        distance[i][0] = i;
    }
    for (let i = 0; i < distance[0].length; i++) {
        distance[0][i] = i;
    }
    
    for (let i = 1; i < word1.length + 1; i++) {
        for (let j = 1; j < word2.length+1; j++) {
            let substitutionCost = word1[i-1] === word2[j-1] ? 0 : 1;
            
            distance[i][j] = Math.min(distance[i-1][j] + 1, distance[i][j-1] + 1, distance[i-1][j-1] + substitutionCost);
        }
    }
    return distance[word1.length][word2.length];
    
};