let are_identical = function(root1, root2) {
    function check(p, q) {
      if (p === null && q === null) {
        return true;
      }
      if (p === null || q === null) {
        return false
      }
      return p.val === q.val && check(p.left, q.left) && check(p.right, q.right);
    }
  
  
    return check(root1, root2);
  };    