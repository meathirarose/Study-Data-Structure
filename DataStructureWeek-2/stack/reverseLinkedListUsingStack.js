class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            return;
        }
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = node;
    }

    print(){
        if(!this.head){
            return "empty";
        }
        let curr = this.head;
        while (curr!==null) {
            console.log(curr.value);
            curr = curr.next;
        }
    }

    reverseLinkedList(){
        if(!this.head || !this.head.next){
            return;
        }

        const stack = new Stack();
        let curr = this.head;

        while (curr!==null) {
            stack.push(curr);
            curr = curr.next;
        }

        this.head = stack.pop();
        curr = this.head;
        while (!stack.isEmpty()) {
            curr.next = stack.pop();
            curr = curr.next;
        }
        curr.next = null;
    }

}

class Stack {
    constructor() {
        this.items = new Array();
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

}
//instantiate linked list
const list = new LinkedList();
list.append(32);
list.append(27);
list.append(65);
list.append(43);
list.append(84);
console.log("Original linked list");
list.print();
console.log("Reversed linked list");
list.reverseLinkedList();
list.print();
