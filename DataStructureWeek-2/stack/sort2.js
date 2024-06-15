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

// Function to sort the stack using array sorting
function sortStack(stack) {
    const tempArray = [];

    // Transfer all elements from the stack to the array
    while (!stack.isEmpty()) {
        tempArray.push(stack.pop());
    }

    // Sort the array
    // tempArray.sort((a, b) => a - b);
    for (let i = 0; i < tempArray.length; i++) {
        for (let j = 0; j < tempArray.length - i - 1; j++) {
            if (tempArray[j] > tempArray[j + 1]) {
                // Swap elements
                let temp = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = temp;
            }
        }
    }
    console.log(tempArray);

    // Push the sorted elements back to the stack
    for (let i = 0; i < tempArray.length; i++) {
        stack.push(tempArray[i]);
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
