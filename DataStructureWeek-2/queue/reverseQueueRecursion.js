class Queue {

    constructor() {
        this.items = new Array();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }else{
            return this.items.shift();
        }
    }

    print(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        console.log(this.items);
    }

}

function reverseQueue(queue) {
    if(queue.isEmpty()){
        return;
    }

    const item = queue.dequeue();

    reverseQueue(queue);

    queue.enqueue(item);
}

const queue = new Queue();
queue.enqueue(23);
queue.enqueue(34);
queue.enqueue(31);
queue.enqueue(12);
queue.enqueue(87);
queue.enqueue(56);
queue.print();

reverseQueue(queue);
queue.print();