/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.set = [];
    this.inSet = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    let boolval = this.inSet.hasOwnProperty(val) ? false : true;
    this.inSet[val] = this.inSet[val] || new Map();
    this.set.push(val);
    this.inSet[val].set(this.set.length-1, true);
    
    return boolval;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if (!this.inSet.hasOwnProperty(val)) {
        return false;
    }
    
    let mapOfIndices = this.inSet[val];
    
    let indexToRemove = mapOfIndices.entries().next().value[0];
    mapOfIndices.delete(indexToRemove);
    if (mapOfIndices.size === 0) delete this.inSet[val];
    
    if (indexToRemove !== this.set.length-1) {
        let swapPart = this.set[this.set.length-1];
        this.inSet[swapPart].delete(this.set.length-1);
        this.inSet[swapPart].set(indexToRemove, true);
        this.set[indexToRemove] = swapPart;
    }
    this.set.pop();
    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.set[Math.floor((Math.random()) * this.set.length)]
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */