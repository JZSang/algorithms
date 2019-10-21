/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.highestValue = new PriorityQueue([],(a,b) => {
        return b-a;
    })
    this.lowestValue = new PriorityQueue([],(a,b) => {
        return a-b;
    })
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (num <= this.highestValue.peek()) {
        this.highestValue.push(num);
    } else {
        this.lowestValue.push(num)
    }
    
    while (this.highestValue.size() > this.lowestValue.size()) {
        this.lowestValue.push(this.highestValue.pop());
    }
    while (this.lowestValue.size() > this.highestValue.size()) {
        this.highestValue.push(this.lowestValue.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.highestValue.size() === this.lowestValue.size()) {
        return (this.highestValue.peek() + this.lowestValue.peek())/2
    }
    if (this.highestValue.size() > this.lowestValue.size()) {
        return this.highestValue.peek()
    } else {
        return this.lowestValue.peek();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
    
    
    class PriorityQueue {
    constructor(data = [], compare = defaultCompare) {
        this.data = data;
        this.length = this.data.length;
        this.compare = compare;

        if (this.length > 0) {
            for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
        }
    }

    push(item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    }
size() {
    return this.length;
}
    pop() {
        if (this.length === 0) return undefined;

        const top = this.data[0];
        const bottom = this.data.pop();
        this.length--;

        if (this.length > 0) {
            this.data[0] = bottom;
            this._down(0);
        }

        return top;
    }

    peek() {
        return this.data[0];
    }

    _up(pos) {
        const {data, compare} = this;
        const item = data[pos];

        while (pos > 0) {
            const parent = (pos - 1) >> 1;
            const current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    }

    _down(pos) {
        const {data, compare} = this;
        const halfLength = this.length >> 1;
        const item = data[pos];

        while (pos < halfLength) {
            let left = (pos << 1) + 1;
            let best = data[left];
            const right = left + 1;

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}