class Stack {

    constructor() {
        this.top = new Array();
    }

    isEmpty(){
        return this.top.length === 0;
    }

    push(value){
        this.top.push(value);
    }

    pop(){
        if(this.isEmpty())
            return "stack is empty";
        return this.top.pop();
    }

    peek(){
        if(this.isEmpty())
            return "Stack is empty";
        return this.top[this.top.length - 1];
    }

    print(){
        if(this.isEmpty())
            return "Stack is empty";
        console.log(this.top);
    }
}

function sortUsingTempStack(stack) {
    const tempStack = new Stack();

    while (!stack.isEmpty()) {
        const temp = stack.pop();

        while (!tempStack.isEmpty() && tempStack.peek() > temp) {
            stack.push(tempStack.pop())
        }

        tempStack.push(temp);
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }

}

const stack = new Stack();
stack.push(23);
stack.push(12);
stack.push(67);
stack.push(54);
stack.push(32);
stack.push(90);
stack.push(76);
console.log("Before Sorting -->");
stack.print();
sortUsingTempStack(stack);
console.log("After Sorting -->");
stack.print();
