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

function merge_sort(list) {
    let length = 0;
    let head = list;
    while (head) {
        length++;
        head = head.next;
    }

    function merge(list) {
      if (!list || !list.next) return list;
        let fastList = list;
        let slowList = list;

        while (fastList && fastList.next) {
            fastList = fastList.next.next;
            if(fastList) slowList = slowList.next
            else break;
        }
        let temp = slowList.next;
        slowList.next = null;
        let sort1 = merge(list);
        let sort2 = merge(temp);
        
        return merge_sorted(sort1,sort2)
    }

    return merge(list);
}
