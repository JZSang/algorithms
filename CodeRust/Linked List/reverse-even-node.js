let reverse_even_nodes = function(head) {
    let evenHead = null;
    let save = head;
    while (save.next) {
        let temp = save.next;
        save.next = save.next.next;
        temp.next = evenHead;
        evenHead = temp;
        save = save.next;
  
    }
    console.log(evenHead);
    save = head;
    let i = 1;
    while (save && evenHead) {
      if (i%2 === 1) {
        let temp = evenHead.next;
        evenHead.next = save.next;
        save.next = evenHead;
        evenHead = temp;
      }
      save = save.next;
      i++;
    }
    return head;
  };