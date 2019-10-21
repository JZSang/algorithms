/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.set = [];
    this.inSet = {
        
    };
    
    this.length = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.inSet.hasOwnProperty(val)) return false;
    this.inSet[val] = this.length;
    this.set[this.length] = val;
    this.length++;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.inSet.hasOwnProperty(val)) return false;
    let storageLocation = this.inSet[val];
    if (storageLocation !== this.length-1) {
        this.set[storageLocation] = this.set[this.length-1];
        this.inSet[this.set[storageLocation]] = storageLocation
    }
    this.set.pop();
    delete this.inSet[val];
    this.length--;
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.set[(Math.floor(Math.random() * (this.length)))];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */