class HashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let PRIME_NUMBER = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * PRIME_NUMBER + value) % this.keyMap.length;
      }
      return total;
    }
  
    set(key, value) {
      let index = this._hash(key);
      if (!this.keyMap[index]) {
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
  
    get(key) {
      let index = this._hash(key);
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    remove(key) {
      let index = this._hash(key);
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            this.keyMap[index].splice(i, 1);
            return true;
          }
        }
      }
      return false;
    }
  
    keys() {
      let keysArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!keysArr.includes(this.keyMap[i][j][0])) {
              keysArr.push(this.keyMap[i][j][0]);
            }
          }
        }
      }
      return keysArr;
    }
  
    values() {
      let valuesArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!valuesArr.includes(this.keyMap[i][j][1])) {
              valuesArr.push(this.keyMap[i][j][1]);
            }
          }
        }
      }
      return valuesArr;
    }
  }
  
  // Example usage:
  let ht = new HashTable();
  ht.set("hello", "world");
  ht.set("foo", "bar");
  ht.set("fizz", "buzz");
  
  console.log(ht.get("hello")); // Output: "world"
  console.log(ht.get("foo"));   // Output: "bar"
  console.log(ht.get("fizz"));  // Output: "buzz"
  console.log(ht.get("unknown")); // Output: undefined
  
  ht.remove("foo");
  console.log(ht.get("foo")); // Output: undefined
  
  console.log(ht.keys());   // Output: ["hello", "fizz"]
  console.log(ht.values()); // Output: ["world", "buzz"]
  