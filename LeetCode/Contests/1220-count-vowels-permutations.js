/*


Given an integer n, your task is to count how many strings of length n can be formed under the following rules:

Each character is a lower case vowel ('a', 'e', 'i', 'o', 'u')
Each vowel 'a' may only be followed by an 'e'.
Each vowel 'e' may only be followed by an 'a' or an 'i'.
Each vowel 'i' may not be followed by another 'i'.
Each vowel 'o' may only be followed by an 'i' or a 'u'.
Each vowel 'u' may only be followed by an 'a'.
Since the answer may be too large, return it modulo 10^9 + 7.

Time:
O(n) where n is the length of the string
Our loop is of length n. We loop through it n times performing O(1) addition and access operations.
Therefore n * O(1) = O(n)

Space:
O(5n) = O(n)
We store a matrix of n rows and 5 columns.

*/

/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    let memo = new Array(n + 1);
    let MOD = 10**9 + 7;
    for (let i = 1; i < memo.length; i++) {
        memo[i] = new Array(5);
    }
    
    for (let i = 0; i < 5; i++) {
        memo[1][i] = 1;
    }
    
    for (let i = 1; i < n; i++) {
        
        
        memo[i+1][0] = mod((((memo[i][1] + memo[i][2]) % MOD) + memo[i][4]), MOD);
        memo[i+1][1] = mod((memo[i][0] + memo[i][2]),MOD);
        memo[i+1][2] = mod((memo[i][1] + memo[i][3]),MOD);
        memo[i+1][3] = mod(memo[i][2],MOD);
        memo[i+1][4] = mod((memo[i][2] + memo[i][3]),MOD);
        
    }
    let ans = 0;
    for (let i = 0; i < 5; i++) {
        ans += (mod(memo[n][i],MOD));
    }
    return mod(ans, MOD);
};

function mod(n, m) {
  return ((n % m) + m) % m;
}