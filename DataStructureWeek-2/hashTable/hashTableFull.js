class HashTable {

    constructor(size) {
        this.keyMap = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i = 0; i< key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value){
        let index = this.hash(key);

        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if(this.keyMap[index][i][0] === key){
                this.keyMap[index][i][1].push(value);
                return;
            }            
        }
        this.keyMap[index].push([key,[value]]);
    }

    get(key){
        let index = this.hash(key);
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i][1];
            }            
        }
        return undefined;
    }

    remove(key){
        let index = this.hash(key);
        if(this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    this.keyMap[index].splice(i, 1);
                    return true;
                }               
            }
        }
        return false;
    }

    print(){
        for(let i = 0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j<this.keyMap[i].length; j++){
                    console.log(`Key: ${this.keyMap[i][j][0]}, Values: ${this.keyMap[i][j][1]}`);
                }
            }
        }
    }

}

const hashTable = new HashTable(50);
hashTable.set("name", "athira");
hashTable.set("place", "pmna");
hashTable.print();