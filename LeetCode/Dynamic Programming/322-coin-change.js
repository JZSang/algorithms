/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    if (coins.length === 0) return -1;
    if (amount === 0) {
        return 0;
    }
    let memo = [0];
    
    for (let i = 1; i <= amount; i++) {
        memo[i] = Number.MAX_SAFE_INTEGER;
        for (let c of coins) {
            if (i - c >= 0) {
                memo[i] = Math.min(memo[i-c] + 1, memo[i]);
            }
        }
    }
    return memo[amount] === Number.MAX_SAFE_INTEGER ? -1 : memo[amount];
    
};