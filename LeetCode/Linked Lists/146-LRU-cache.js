/*

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 capacity );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4


Time:
As required we have O(1) time each. When we make a get, we access the object for the value.
We then move it to the front of the doubly linked list which is always O(1). When we delete something we just pop off
the back of the list which will always be O(1).

Space:
O(capacity). Our linkedlist and hashmap will always be at most the capacity as is required by a cache.

*/


class DoubleList {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.object = {};
    this.capacity = capacity;
    this.size = 0;
    this.front = null;
    this.back = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this.object) {
        this.update(key);
        return this.object[key].val;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (key in this.object) {
        this.object[key].val = value;
        this.update(key);
    } else {
        if (this.size === this.capacity) {
            this.destroy();
        }
        this.size++;
        
        let newNode = new DoubleList(key, value);
        this.object[key] = newNode;
        this.update(key);
    }
};

LRUCache.prototype.destroy = function() {
    if (this.back) {
        this.size--;
        if (this.size === 0) {
            delete this.object[this.front.key];
            this.front = null;
            this.back = null;
        } else {
            this.back.prev.next = null;
            delete this.object[this.back.key];
            this.back = this.back.prev;
        }
        
    }
}

LRUCache.prototype.update = function(key) {
    
    let node = this.object[key];
    
    if (this.size === 1) {
        this.front = node;
        this.back = node;
        return;
    }
    if (this.front === node) return;
    
    if (node.next) node.next.prev = node.prev;
    if (node.prev) {
        node.prev.next = node.next;
        if (this.back === node) this.back = node.prev;
    }
    
    node.next = this.front;
    this.front.prev = node;
    this.front = node;
    this.front.prev = null;
} 

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */