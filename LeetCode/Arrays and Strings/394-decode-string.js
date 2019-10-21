/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    function findIndex(i) {
        let number = 0;
        do {
            if (s[i] === "[") number++;
            if (s[i] === "]") number--;
            i++;
        } while (number !== 0);
        return i-1;
    }
    
    function dfs(string, i, j) {
        for (; i <= j; i++) {
            if (s[i] <= "9" && "0" <= s[i]) {
                let k = i;
                while (s[k] <= "9" && s[k] >= "0") k++;
                let total = s.slice(i, k);
                let newIndex = findIndex(i+(k-i));
                let newString = dfs([], i+(k-i)+1, newIndex-1).join("");
                for (let k = 0; k < Number(total); k++) {
                    string.push(newString);
                }
                i = newIndex;
            } else {
                string.push(s[i]);
            }
        }
        return string;
    }
    return dfs([], 0, s.length-1).join("");
};