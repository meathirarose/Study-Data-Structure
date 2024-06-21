class Stack {
    constructor() {
        this.items = new Array();
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        if(this.isEmpty())
            return "empty";
        return this.items.pop();
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

function smallestNumber(stack) {
    if (stack.isEmpty()) {
        return "empty";
    }

    let temp = new Stack();
    let min = Infinity;

    while (!stack.isEmpty()) {
        let current = stack.pop();
        if(current < min)
            min = current;
        temp.push(current);
    }

    while (!temp.isEmpty()) {
        stack.push(temp.pop());
    }
    return min;
}
const stack = new Stack();
stack.push(12);
stack.push(32);
stack.push(45);
stack.push(75);
stack.push(10);
console.log("stack values");
stack.print();
console.log("smallest");
console.log(smallestNumber(stack));