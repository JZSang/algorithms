/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let hash = new Set(wordList);
    hash.delete(beginWord);
    let visited = new Set();
    let letter = "abcdefghijklmnopqrstuvwxyz"
    
    let min = Number.MAX_SAFE_INTEGER;
    let ans = [];
    
    let queue = new Queue();
    queue.push([beginWord]);
    queue.push([null]);
    
    while (queue.length) {
        let wordSequence;
        let bank = [];
        while (true) {
            wordSequence = queue.shift();
            if (wordSequence === undefined) break;
            if (wordSequence.length === min) return ans;
            let word = wordSequence[wordSequence.length-1];
            if (word === null) {
                if (queue.length === 0) return ans;
                queue.push([null]);
                break;
            }
            for (let i = 0; i < word.length; i++) {
                    for (let j = 0; j < letter.length; j++) {
                        let testWord = word.substring(0, i) + letter[j] + word.substring(i+1, word.length)
                        if (!hash.has(testWord) || visited.has(testWord)) continue;
                        wordSequence.push(testWord);
                        if (wordSequence.length > min) return ans;
                        if (hash.has(testWord) && testWord === endWord) {

                            if (wordSequence.length < min) {
                                min = wordSequence.length;
                                ans = [];
                                ans.push(wordSequence.slice());
                            } else if (wordSequence.length === min) {
                                ans.push(wordSequence.slice());
                            } else {
                                return ans;
                            }
                        } else if (hash.has(testWord) && !visited.has(testWord)) {
                            bank.push(testWord);
                            queue.push(wordSequence.slice());
                        }
                        wordSequence.pop();
                    }
            }
            
        
        }
        for (let c of bank) {
            visited.add(c);
        }
        
        
    }
    return ans;
};

class Queue extends Map {
  constructor() {
    super();
    this.insertionIndex = 0;
    this.removalIndex = 0;
      this.length = 0;
  }

  push(element) {
    this.set(this.insertionIndex, element);
    this.insertionIndex++;
      this.length++;
  }

  shift() {
    const el = this.get(this.removalIndex);
    if (typeof el !== 'undefined') {
      this.delete(this.removalIndex);
      this.removalIndex++;
        this.length--;
    }
    return el;
  }
}


// faster version 2

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    
    let graph = {};
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const hash = new Set(wordList);
    let ans = [];
    let distance = {};
    
    function bfs() {
        
        let queue = [beginWord, null];
        let length = 1;
        while (queue.length) {
            let word = queue.shift();
            if (word === null) {
                length++;
                if (queue.length === 0) return;
                queue.push(null);
                continue;
            }
            if (graph[word]) continue
            else graph[word] = [];
            if (word === endWord) {
                return length;
            }
            for (let i = 0 ; i < word.length; i++) {
                for (let j = 0; j < letters.length; j++) {
                    let testWord = word.substring(0,i) + letters[j] + word.substring(i+1, word.length);
                    if (hash.has(testWord) && !graph[testWord]) {
                        if (distance[testWord] === undefined) distance[testWord] = length + 1;
                        graph[word].push(testWord);
                        queue.push(testWord);
                    }
                }
            }
        }
        
    }
    
    function dfs(startWord, array) {
        if (!graph[startWord]) return;
        if (startWord === endWord) {
            if (array.length <= dist) {
                ans.push(array.slice())
            }
            return;
        }
        if (array.length >= dist) return;
        let to = graph[startWord];
        for (let c of to) {
            if (distance[c] === array.length + 1) {
                array.push(c);
            dfs(c, array);
            array.pop();
            }
            
        }
    }
    
    let dist = bfs();
    dfs(beginWord, [beginWord]);
    
    return ans;
};

