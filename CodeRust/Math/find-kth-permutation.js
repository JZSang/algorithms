let find_kth_permutation = function(v, k, result) {
    if (!v || !v.length) return;
  
    let size = factorial(v.length-1);
    let count = Math.floor((k-1) / size);
    let val = v.splice(count, 1);
    result[0] += val;
  
    find_kth_permutation(v, k - (count * size), result);
  
  
  };
  
  function factorial(n) {
    let i = 1;
    let ans = 1;
    for (; i <= n; i++) {
      ans *= i;
    }
    return ans;
  }