function fib(n) {
    let memo = [0, 1];
    if (n === 0) return 0;
    if (n === 1) return 1;
    for (let i = 2; i <= n; i++) {
        memo.push(memo[i-1] + memo[i-2]);
    }
    return memo[memo.length-1];
}

console.log(fib(27) === fib2(27))

function fib2(n) {

    // Edge cases:
    if (n < 0) {
      throw new Error('Index was negative. No such thing as a negative index in a series.');
    } else if (n === 0 || n === 1) {
      return n;
    }
  
    // We'll be building the fibonacci series from the bottom up
    // So we'll need to track the previous 2 numbers at each step
    let prevPrev = 0;  // 0th fibonacci
    let prev = 1;      // 1st fibonacci
    let current;       // Declare current
  
    for (let i = 1; i < n; i++) {
  
      // Iteration 1: current = 2nd fibonacci
      // Iteration 2: current = 3rd fibonacci
      // Iteration 3: current = 4th fibonacci
      // To get nth fibonacci ... do n-1 iterations.
      current = prev + prevPrev;
      prevPrev = prev;
      prev = current;
    }
  
    return current;
  }