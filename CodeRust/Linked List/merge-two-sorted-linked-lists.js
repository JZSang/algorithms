let merge_sorted = function(head1, head2) {
    let superHead = {next:null};
    let track = superHead;
    while (head1 && head2) {
      if (head1.data < head2.data) {
        track.next = head1;
        head1 = head1.next;
        track = track.next;
      } else {
        track.next = head2;
        head2 = head2.next;
        track = track.next;
      }
    }
    if (head1) {
      track.next = head1;
    } else {
      track.next = head2;
    }
  
    return superHead.next;
  
  };