let swap_nth_node = function(head, n) {
    if (n <= 1) return head;
    let superHead = {next:null};
    superHead.next = head;
    head = superHead;
    while (head.next && n-1) {
      head = head.next;
      n--
    }
    if (n < 0) {
      return null;
    }
    let temp = head.next;
    let headNext = superHead.next.next;
    superHead.next.next = head.next.next;
    head.next = superHead.next;
    temp.next = headNext;
    superHead.next = temp;
  
    return superHead.next;
  };