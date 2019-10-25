let remove_duplicates = function(str) {
    let set = new Set();
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (set.has(str[i])) {
            continue;
        }
        set.add(str[i]);
        newStr.push(str[i]);
    }
    return newStr.join("");
};