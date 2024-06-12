class HashTable {

    constructor(size) {

        this.keyMap = new Array(size);
        this.size = size;

    }

    hash(key) {

        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;

    }

    set(key, value) {

        let index = this.hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                this.keyMap[index][i][1].push(value); 
                return;
            }
        }

        this.keyMap[index].push([key, [value]]);
    }

    get(key) {

        let index = this.hash(key);

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

        let index = this.hash(key);

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
        let keyArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keyArray.includes(this.keyMap[i][j][0]))
                        keyArray.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keyArray;
    }

    values() {
        let valueArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valueArray.push(this.keyMap[i][j][1]);
                }
            }
        }
        return valueArray;
    }
}

const hashTable = new HashTable(50);
hashTable.set("name", "Athira");
hashTable.set("age", 20);
hashTable.set("place", "Perinthalmanna");
hashTable.set("age", 25);
hashTable.set("month", "June");
console.log(hashTable.get("name")); 
console.log(hashTable.get("age")); 
console.log(hashTable.keys());
console.log(hashTable.values());
