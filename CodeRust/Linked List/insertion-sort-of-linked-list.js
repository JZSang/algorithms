let insertion_sort = function(head){
    let sorted = {next:null};
    let sortTraverse = sorted;
    while (head) {
      console.log(sortTraverse);
      if (sortTraverse.next === null) {
        let temp = head.next;
        head.next = sortTraverse.next;
        sortTraverse.next = head;
        head = temp;
      } else {
        while (sortTraverse.next && head.data > sortTraverse.next.data) {
          sortTraverse = sortTraverse.next;
        }
        
        if (!sortTraverse.next) {
          let temp = head.next;
          sortTraverse.next = head;
          head = temp;
        } else {
          let temp = head.next;
          head.next = sortTraverse.next;
          sortTraverse.next = head;
          head = temp;
        }
      }
      sortTraverse = sorted;
    }
  
    return sorted.next;
  
  };