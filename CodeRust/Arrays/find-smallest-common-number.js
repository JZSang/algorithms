let find_least_common_number = function(a, b, c) {
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < a.length && j < b.length && k < c.length) {
      if (a[i] === b[j] && b[j] === c[k]) {
        return a[i];
      } else if (a[i] < b[j]) {
        i++;
      } else if (b[j] < c[k]) {
        j++;
      } else {
        k++;
      }
    }
    return null;
  };