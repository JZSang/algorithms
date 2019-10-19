/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.min === null || x <= this.min) {
        this.min.push()
    }
    this.stack.push(x);
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let item = this.stack.pop();
    if (item === this.minStack[this.minStack.length-1]) {
        this.minStack.pop();
    }
    return item;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.minStack.length === 0) return;
    return this.minStack[this.minStack.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */