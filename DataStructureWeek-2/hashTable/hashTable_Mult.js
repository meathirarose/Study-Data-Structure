class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let hash = 0;
        const A = (Math.sqrt(5) - 1/2);
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)            
        }
        hash = hash * A % 1;
        return Math.floor(hash * this.size);
    }

    set(key, value){
        const index = this.hash(key);

        if(!this.table[index]){
            this.table[index] = [];
        }

        for(let i = 0; i< this.table[index].length; i++){
            if(this.table[index][i][0] === key){
                this.table[index][i][1].push(value);
                return;
            }
        }
        this.table[index].push([key, [value]]);
    }

    get(key){
        const index = this.hash(key);

        for(let i = 0; i< this.table[index].length; i++){
            if(this.table[index][i][0] === key){
                return this.table[index][i][1];
            }
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        
        if (this.table[index]) {
            for(let i = 0; i< this.table[index]; i++){
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    print(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                for (let j = 0; j < this.table[i].length; j++) {
                    console.log(`Key: ${this.table[i][j][0]}, Values: ${this.table[i][j][1]}`);                    
                }
            }            
        }
    }
}

const hashtable = new HashTable(50);
hashtable.set("name", "athira");
hashtable.set("place", "pmna");
hashtable.set("age",21);
hashtable.set("hus", "arun");
console.log(hashtable.get("name"));
hashtable.print();