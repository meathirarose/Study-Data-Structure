class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        return this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    print() {
        if (this.isEmpty()) {
            console.log("stack is empty");
        } else {
            console.log(this.items.toString());
        }
    }
}

// Function to sort the stack
function sortStack(stack) {
    const tempStack = new Stack();

    while (!stack.isEmpty()) {
        const temp = stack.pop();

       while (!tempStack.isEmpty() && tempStack.peek() > temp) {
            stack.push(tempStack.pop());
        }

        tempStack.push(temp);
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
}

const stack = new Stack();
console.log('Is stack empty?', stack.isEmpty()); 
stack.push(21);
stack.push(22);
stack.push(23);
stack.push(20);
stack.push(25);
stack.push(24);

console.log('Stack size:', stack.size()); 
console.log('Is stack empty?', stack.isEmpty()); 
console.log('Top element:', stack.peek()); 

console.log('Stack elements before sorting:');
stack.print(); // 21,22,23,20,25,24

// Sort the stack
sortStack(stack);

console.log('Stack elements after sorting:');
stack.print(); // 20,21,22,23,24,25
