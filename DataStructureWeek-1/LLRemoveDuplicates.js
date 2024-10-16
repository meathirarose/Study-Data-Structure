class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }
    getSize(){
        return this.size;
    }
    isEmpty(){
        return this.head === null;
    }
    prepend(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    removeDuplicates(){
        if(this.isEmpty()) return;

        let seen = new Set();
        let current = this.head;
        let previous = null;

        while(current!==null){
            if(seen.has(current.value)){
                previous.next = current.next;
                this.size--;
            }else{
                seen.add(current.value);
                previous = current;
            }
            current = current.next;
        }
    }
    print(){
        let current = this.head;
        let values = '';
        while(current){
            values+=`${current.value}, `;
            current = current.next;
        }
        console.log('Values = ', values);
    }
}

const ll = new LinkedList();
ll.prepend(12);
ll.prepend(65);
ll.prepend(43);
ll.prepend(29);
ll.prepend(12);
ll.prepend(54);
ll.prepend(43);
ll.print();
ll.removeDuplicates();
ll.print();