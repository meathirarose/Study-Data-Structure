class StackUsingQueue {

    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(value){
        this.queue1.push(value);
    }

    pop(){
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        const poppedElement = this.queue1.shift();

        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return poppedElement;
    }

    peek(){
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        const topElement = this.queue1.shift();
        this.queue2.push(topElement);
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return topElement;
    }

    isEmpty(){
        return this.queue1.length === 0 && this.queue2.length === 0;
    }

    print(){
        if(this.isEmpty())
            return null;
        console.log([...this.queue1, ...this.queue2]);
    }

}

const stack = new StackUsingQueue();
stack.push(29);
stack.push(23);
stack.push(26);
stack.push(21);
stack.print();
console.log(stack.pop());  // Output: 21
console.log(stack.peek()); // Output: 26
stack.print();             // Output: [29, 23, 26]
stack.push(34);
stack.pop()
stack.pop()
stack.pop()
stack.push(32)
stack.push(32)
stack.push(43)