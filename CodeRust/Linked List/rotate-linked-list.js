let rotate_list = function(head, n) {
    let length = 0;
    let save = head;
    while (save) {
      length++;
      save = save.next
    }
  
    n = ((n % 5) + 5) % 5;
    if (n === 0) return head;
    let goDown = length - n - 1;
    let result = {next:null};
    save = head;
    while (goDown >= 1) {
      goDown--;
      save = save.next;
    }
    let tail = save.next;
    save.next = null;
    result.next = tail;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = head;
  
    return result.next;
  };