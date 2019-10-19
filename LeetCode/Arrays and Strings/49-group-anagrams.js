/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function(strs) {
    let array = new Array(strs.length);
    let base = "a".charCodeAt(0);
    
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(26).fill(0);
    }
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            array[i][strs[i].charCodeAt(j)-base]++;
        }
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].join();
    }
    let obj = {};
    for (let i = 0; i < strs.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = [];
        }
        obj[array[i]].push(strs[i]);
    }
    return Object.values(obj);
};