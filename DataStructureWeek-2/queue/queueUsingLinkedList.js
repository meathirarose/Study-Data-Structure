class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty(){
        return this.front === null;
    }

    getSize(){
        return this.size;
    }

    enqueue(value){
        const node = new Node(value);
        if(this.rear === null){
            this.front = node;
            this.rear = node;
        }else{
            this.rear.next = node;
            this.rear = node; 
        }
        this.size++;
    }

    dequeue(){
        if(this.front === null){
            return null;
        }
        const dequeueNode = this.front;
        this.front = this.front.next;
        if(this.front === null){
            this.rear = null;
        }
        this.size--;
        return dequeueNode.value;
    }

    peek(){
        if(this.front === null){
            return null;
        }else{
            return this.front.value;
        }
    }

    printQueue(){
        if(this.front === null)
            return null;

        let curr = this.front;
        let values = [];
        while(curr!==null){
            values.push(curr.value);
            curr = curr.next;
        }
        console.log("Queue = ",values);
    }
    
}

const queue = new Queue();
console.log("is queue empty = ", queue.isEmpty());
queue.enqueue(2);
queue.enqueue(4);
console.log("is queue empty = ", queue.isEmpty());
console.log("size of queue = ", queue.getSize());
queue.printQueue();
console.log("front value = ", queue.peek());
queue.enqueue(3);
queue.enqueue(6);
queue.printQueue();
console.log("after deletion");
queue.dequeue();
queue.printQueue();

