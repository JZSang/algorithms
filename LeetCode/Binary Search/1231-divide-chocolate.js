/**
 * @param {number[]} sweetness
 * @param {number} K
 * @return {number}
 */

 /*
You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness given by the array sweetness.

You want to share the chocolate with your K friends so you start cutting the chocolate bar into K+1 pieces using K cuts, each piece consists of some consecutive chunks.

Being generous, you will eat the piece with the minimum total sweetness and give the other pieces to your friends.

Find the maximum total sweetness of the piece you can get by cutting the chocolate bar optimally.

Time:
O(Nlog(sum(sweetness))) The sum is applied as binary search. Then each binary search consists
of a linear adding of the sweetness array

Space:
O(1)
 */
var maximizeSweetness = function(sweetness, K) {
    K = K + 1;
    let sum = 0;
    for (let c of sweetness) {
        sum += c;
    }
    let i = 1;
    let j = sum;
    
    while (i < j) {
        let mid = Math.floor((i+j+1)/2);
        let count = 0;
        let total = 0;
        let unusable = false;
        for (let k = 0; k < sweetness.length; k++) {
            total += sweetness[k]
            if (total >= mid) {
                
                count++;
                total = 0;
            }
        }
        if (count < K) {
            j = mid-1;
        } else if (count >= K) {
            i = mid;
        }
    }
    return i;
    
};