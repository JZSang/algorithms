let delete_node = function(head, key) {
    let superHead = {next:null};
    superHead.next = head;
    head = superHead;
    while (head.next) {
      if (head.next.data === key) {
        head.next = head.next.next;
      }
      head = head.next;
    }
    return superHead.next;
  };