/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.map.get(key)
    if(val == undefined){return -1;}
    //Map  has sorted order. FIFO.
    this.map.delete(key);
    //we get value and push it to the back;
    this.map.set(key,val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //remove value if exists.
    if(this.map.has(key)){
        this.map.delete(key)
    }
    this.map.set(key,value);
    let keys = this.map.keys();
    while(this.map.size > this.capacity){
        //remove  Least Recently Used  elements
        this.map.delete(keys.next().value)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */