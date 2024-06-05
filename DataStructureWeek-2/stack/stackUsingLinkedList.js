class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class stackLinkedList {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value){
        const node = new Node(value);
        if (this.top === null) {
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
        this.size++;
    }

    isEmpty(){
        return this.top === null;
    }

    getSize(){
        return this.size;
    }

    peek(){
        return this.top.value;
    }

    printStack(){
        if(this.isEmpty()){
            console.log("the stack is empty");
        }else{
            let current = this.top;
            while(current!==null){
                console.log(current.value);
                console.log("^");
                current = current.next;
            }
        }
    }
}

const stack = new stackLinkedList();
stack.push(10);
stack.push(20);
stack.push(30);

console.log('\n');
console.log("stack values");
stack.printStack(); 
console.log("On stack top");
console.log(stack.peek());