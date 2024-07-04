class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority){
        this.elements.push({element, priority});
        this.elements.sort((a,b) => a.priority - b.priority);
    }

    dequeue(){
        return this.elements.shift();
    }

    peek(){
        return this.elements[0];
    }

    isEmpty(){
        return this.elements.length === 0;
    }

    size(){
        return this.elements.length;
    }
}

const pq = new PriorityQueue();
pq.enqueue("task 3", 3);
pq.enqueue("task 1", 4);
pq.enqueue("task 4", 2);
pq.enqueue("task 2", 1);
console.log("Priority Queue:");
console.log(pq.elements);