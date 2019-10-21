/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.obj = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.obj.hasOwnProperty(key)) {
        this.obj[key] = [];
    }
    this.obj[key].push({timestamp, value});
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.obj.hasOwnProperty(key)) {
        return ""
    } else {
        
        let j = this.obj[key].length-1;
        let i = 0;
        while (i < j) {
            let mid = Math.floor((i+j+1)/2);
            if (this.obj[key][i].timestamp > timestamp) return ""
            if (this.obj[key][mid].timestamp <= timestamp) {
                i = mid;
            } else {
                j = mid-1;
            }
        }
        return this.obj[key][i].timestamp <= timestamp ? this.obj[key][i].value : "";
        
    }
};
