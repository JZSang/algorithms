/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let count = 0;
    let ans = "";
    
    let array = new Array(128).fill(null);
    
    for (let i = 0; i < t.length; i++) {
        if (array[t.charCodeAt(i)] === null) {
            array[t.charCodeAt(i)] = 0;
            count++;
        }
        array[t.charCodeAt(i)]++;
    }
    
    let min = s.length+1;
    
    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (array[s.charCodeAt(j)] !== null) {
            array[s.charCodeAt(j)]--;
            if (array[s.charCodeAt(j)] === 0) {
                // character completed
                count--;
            }
        }
        if (count === 0) {
            while (array[s.charCodeAt(i)] === null || array[s.charCodeAt(i)] < 0) {
                if (array[s.charCodeAt(i)] !== null) array[s.charCodeAt(i)]++;
                i++;
            }
            if ((j-i+1) < min) {
                ans = s.substring(i, j+1);
                min = ans.length;
            }
            array[s.charCodeAt(i)]++;
            i++;
            count++;
        }
        
        
        j++;
    }
    
    
    return ans;
};