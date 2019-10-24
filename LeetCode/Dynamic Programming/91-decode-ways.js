/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let ans = 0;
    
    let dp = new Array(s.length).fill(1);
    if (s[0] === "0") return 0;
    for (let i = 1; i < s.length; i++) {
        let add = 0;
        if (s[i-1] === "1" && s[i] <= "9" && s[i] >= "0") {
            add += dp[i-2] || 1;
        } else if (s[i-1] === "2" && s[i] <= "6" && s[i] >= "0") {
            add += dp[i-2] || 1;
        }
        if (s[i] === "0" && (s[i-1] !== "2" && s[i-1] !== "1")) return 0;
        if(s[i] !== "0") add += dp[i-1];
        dp[i] = add;
    }
    
    return dp[dp.length-1];
};