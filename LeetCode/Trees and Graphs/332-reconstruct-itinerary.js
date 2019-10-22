/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let obj = {};
    let count = tickets.length + 1;
    for (let i = 0; i < tickets.length; i++) {
        if (!obj.hasOwnProperty(tickets[i][0])) {
            obj[tickets[i][0]] = new PriorityQueue([], (a,b) => {
                if (a <= b) {
                    return -1;
                } else {
                    return 1;
                }
            })
        }
        obj[tickets[i][0]].push(tickets[i][1]);
    }
    let ans = [];
    function dfs(departure) {
        let arrivals = obj[departure];
        while (arrivals !== undefined && arrivals.size()) {
            console.log(arrivals.peek())
            dfs(arrivals.pop());
        }
        
        ans.push(departure);
    }
    
    dfs("JFK");
    return ans.reverse();
};


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