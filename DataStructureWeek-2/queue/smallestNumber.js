class Queue {
    constructor() {
        this.items = new Array();
    }
    enqueue(value){
        this.items.push(value);
    }
    dequeue(){
        if(this.isEmpty())
            return "empty";
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    print(){
        if(this.isEmpty())
            return "empty";
        else
            console.log(this.items);
    }
}

function smallestNumber(queue) {
    if(queue.isEmpty())
        return "empty";

    let tempQueue = new Queue();
    let min = Infinity;

    while (!queue.isEmpty()) {
        let current = queue.dequeue();
        if(current < min)
            min = current;
        tempQueue.enqueue(current);
    }

    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue());
    }

    return min;
}

const queue = new Queue();
queue.enqueue(23);
queue.enqueue(43);
queue.enqueue(76);
queue.enqueue(12);
queue.enqueue(54);
console.log("Queue values");
queue.print();
console.log("smallest number");
console.log(smallestNumber(queue));
