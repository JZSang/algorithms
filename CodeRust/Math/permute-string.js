let permute_string = function(input, perms) {
    let ans = perms;
    let set = {};
  
    for (let c of input) {
      set[c] = (set[c] || 0) + 1;
    }
    function dfs(s) {
      if (s.length === input.length) {
        ans.push(s.join(""));
        return;
      }
      
      for (let i = 0; i < input.length; i++) {
        if (!set[input[i]]) continue;
        set[input[i]]--;
        s.push(input[i]);
        dfs(s);
        s.pop();
        set[input[i]]++;
      }
    }
  
    dfs([]);
    return ans;
  };