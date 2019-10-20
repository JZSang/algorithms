/**
 * @param {number[]} w
 */
var Solution = function(w) {
    let total = 0;
    for (let i = 0; i < w.length; i++) {
        total += w[i];
    }
    this.array = [];
    let cumulative = 0;
    
    for (let i = 0; i < w.length; i++) {
        cumulative += w[i] / total;
        this.array[i] = cumulative;
    }
    
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let ran = Math.random();
    let i = 0;
    let j = this.array.length-1;
    while (i < j) {
        let mid = Math.floor((i+j)/2);
        if (ran <= this.array[mid]) {
            j = mid;
        } else if (ran > this.array[mid]) {
            i = mid + 1;
        }
    }
    return i;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */