class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }
// inserting in the beginning
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
// inserting at the end
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let previous = this.head;
            while(previous.next){
                previous = previous.next;
            }
            previous.next = node;
        }
        this.size++;
    }
// inserting in a specified index
    insert(value, index){
        if(index < 0 || index > this.size){
            return;
        }
        if(index === 0){
            return this.prepend(value);
        }else{ 
            const node = new Node(value);
            let previous = this.head;
            for(let i=0; i<index-1; i++){
                previous = previous.next;
            }
            node.next = previous.next;
            previous.next = node;
            this.size++;
        }
    }
// remove from an index
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null;
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next;
        }else{ 
            let previous = this.head;
            for(let i = 0; i<index- 1; i++){
                previous = previous.next;
            }
            removeNode = previous.next;
            previous.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }
// remove by value
    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        }else{
            let previous = this.head;
            while(previous.next && previous.next.value!==value){
                previous = previous.next;
            }
            if(previous.next){
                const removeNode = previous.next;
                previous.next = removeNode.next;
                this.size--;
                return value;
            }
        }
        return null;
    }
// search value
    search(value){
        if(this.isEmpty()){
            console.log("List is empty!");
        }
        let i = 0;
        let current = this.head;
        while (current) {
            if(current.value === value){
                return i;
            }
            current = current.next;
            i++;
        } 
        return false;
    }
// reverse list
    reverse(){
        let previous = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }
// sum of all values
    sum(){
        let current = this.head;
        let sum = 0;
        while(current){
            sum += current.value;
            current = current.next;
        }
        return sum;
    }
// printing values
    print(){
        if(this.isEmpty()){
            console.log("List is empty!");
        }else{
            let current = this.head;
            let listValues = "";

            while(current){
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log("List values = ", listValues);
        }
    }   
}


const list = new linkedList();

const arr = [2,3,4,5,6];
for (let i = 0; i < arr.length; i++) {
    list.append(arr[i]);
}

list.print(); 

console.log("-------------Initial-------------");
console.log("Empty? ", list.isEmpty());
console.log("Size = ", list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
console.log("-------------prepend-------------");   
console.log("Empty? ", list.isEmpty());
console.log("Size = ", list.getSize());
console.log("--------------------------");
list.print();
console.log("--------------------------");
list.append(22);
list.append(33);
list.print();
console.log("------------insert--------------");
list.insert(77, 2);
list.print();
console.log("------------remove from--------------");
list.removeFrom(0);
list.print();
console.log("--------------------------");
list.removeFrom(2);
list.print();
console.log("--------------------------");
console.log(list.removeFrom(10));;
list.print();
console.log("--------------------------");
list.removeValue(77);
list.print();
console.log("--------------------------");
console.log(list.search(33));
console.log("--------------------------");
list.reverse();
list.print();
console.log("--------------------------");
console.log("Sum of the values = ",list.sum());
console.log("--------------------------");
