let remove_white_spaces = function(s) {
    s = s.split("");
    console.log(s);
    let i = 0;
    let j = 0;
    
  
    while (j < s.length) {
      if (s[j] === "\t" || s[j] === " ") {
        j++;
      } else {
        s[i] = s[j];
        j++;
        i++;
        
      }
    }
    let length = s.length;
    while (i < s.length) {
      s.pop();
    }
    console.log(s);
      return s.join("");
  };