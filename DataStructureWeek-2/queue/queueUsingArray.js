class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        if(this.isEmpty()){
            return -1;
        }else{
            return this.items.shift();
        }
    }

    peek(){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    print(){
        if(this.isEmpty()){
            return -1;
        }else{
            console.log(this.items.toString());
        }
    }
}

const queue = new Queue();
console.log("Initial queue");
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(1);
queue.print();
queue.dequeue();
console.log("deleting one element");
queue.print();
queue.dequeue();
console.log("deleting one element");
queue.print();
queue.dequeue();
console.log("deleting one element");
queue.print();
