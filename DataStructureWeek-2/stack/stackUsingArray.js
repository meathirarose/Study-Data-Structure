class Stack {
    constructor(){
        this.items = [];
    }

    push(value){
        return this.items.push(value);
    }

    pop(){
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    size(){
        return this.items.length;
    }

    print(){
        if(this.isEmpty()){
            console.log("stack is empty");
        }else{
            console.log(this.items.toString());
        }
    }

}

const stack = new Stack();
console.log('=================================is empty===================================================')
console.log(stack.isEmpty());
console.log('=================================push values===================================================')
console.log(stack.push(21));
console.log(stack.push(22));
console.log(stack.push(23));
console.log('=================================get size===================================================')
console.log(stack.size());
console.log('=================================is empty===================================================')
console.log(stack.isEmpty());
console.log('=================================top element===================================================')
console.log(stack.peek());
console.log('=================================stack values===================================================')
stack.print();