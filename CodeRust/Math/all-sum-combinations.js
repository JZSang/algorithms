let print_all_sum = function(target) {
  

    let ans = [];
    function dfs(total, array,start) {
      if (total > target) {
        return;
      } else if (total === target) {
        ans.push(array.slice());
        return;
      }
      for (let j = start; j < target; j++) {
        array.push(j);
        dfs(total + j, array, j);
        array.pop();
      }
    }
  
    dfs(0, [], 1);
  
    return ans;
  };
  
  console.log(print_all_sum(6))