let integer_divide = function(x, y) {
    if (x < y) {
      return 0;
    } else if (x === y) {
      return 1;
    } else if (y === 0) {
      return -1;
    }
  
    let quotient = 1;
    let val = y;
  
    while (x > val) {
      val <<= 1;
      quotient <<= 1;
    }
  
    if (x < val) {
      val >>= 1;
      quotient >>= 1;
  
      return quotient + integer_divide(x-val, y);
    }
    return quotient;
  };