function reverseWords(message) {
    function reverse(i, j) {
        while (i <= j) {
            let temp = message[i];
            message[i] = message[j];
            message[j] = temp;
            i++;
            j--;
        }
    }

    reverse(0, message.length-1)


    let start = 0;
    let end  = 0;
    while (end < message.length && start < message.length) {
        while (end < message.length && message[end] !== ' ') end++;
        
        reverse(start, end-1)
        end++;
        start = end;
    } 

    return message;
}



  const message = [ 'c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));