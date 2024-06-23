class Stack {
    constructor() {
        this.items = new Array();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        if(this.isEmpty()){
            return "empty";
        }
        return this.items.pop();
    }
    print(){
        if(this.isEmpty()){
            return "empty";
        }else{
            console.log(this.items);
        }
    }
}

function reverseStack(stack) {
    if(stack.isEmpty()){
        return;
    }

    const temp = new Stack();

    const item = stack.pop();

    reverseStack(stack);

    temp.push(item);
    return temp;
}

const stack = new Stack();
stack.push(32);
stack.push(12);
stack.push(43);
stack.push(65);
stack.push(87);
stack.print();
console.log(reverseStack(stack));
