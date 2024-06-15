class Stack {

    constructor(){
        this.items = [];
        this.top = -1;
    }

    push(value){
        this.items[++this.top] = value;
        return this.size();
    }

    pop(){
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        let item = this.items[this.top];
        this.items.splice(this.top--, 1);
        return item;
    }

    isEmpty(){
        return this.top === -1;
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.items[this.top];
    }

    size(){
        return this.top + 1;
    }

    print(){
        if(this.isEmpty()){
            return "Stack is empty";
        }else{
            console.log(this.items.slice(0, this.size()));
        }
    }

}

const stack = new Stack();
stack.push(32);
stack.push(54);
stack.push(65);
stack.print();