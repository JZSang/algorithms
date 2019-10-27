/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */


const ladderLength = function(beginWord, endWord, wordList) {
    if (beginWord === endWord) return 1;
    let min = 1;
    let char = "abcdefghijklmnopqrstuvwxyz";
    
    let set = new Set(wordList);
    set.delete(beginWord);
    
    let visited = new Set();
    let queue = [beginWord];
    
    
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            
            visited.add(node);
            
            for (let j = 0; j < node.length; j++) {
                for (let k = 0; k < 26; k++) {
                    let testWord = node.substring(0, j) + char[k] + node.substring(j+1, node.length);
                    if (!set.has(testWord) || visited.has(testWord)) continue;
                    visited.add(testWord);
                    if (testWord === endWord) return min+1;
                    queue.push(testWord);
                    
                }
            }
        }
        min++;
        
        
    }
    return 0;
    
    
    
    
}
