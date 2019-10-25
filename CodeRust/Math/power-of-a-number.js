let power = function(x, n) {
   
    function divide(x,n) {
        if (n === 1) {
            return x;
        } else if (n === -1) {
            return 1/x;
        } else if (n===0) {
            return 1;
        }
        let powers = n < 0 ? Math.ceil(n / 2) : Math.floor(n / 2);
            return divide(x, powers) * divide(x, powers) * divide(x, n%2);
    }
 
    return divide(x,n);
 };