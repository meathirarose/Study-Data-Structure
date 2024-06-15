class Stack {

    constructor() {
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    push(value){
        return this.items.push(value);
    }

    pop(){
        if(this.isEmpty())
            return "Stack is empty";
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    print(){
        if(this.isEmpty()){
            return "Stack is empty";
        }else{
            console.log(this.items);
        }
    }

}

function isPrime(num){
    
    if(num <=1)
        return false;

    let stack = new Stack();

    for(let i = 2; i<num; i++){
        stack.push(i);
    }

    while (!stack.isEmpty()) {
        let factor = stack.pop();
        if(num%factor===0){
            return false;
        }
    }
    return true;
}

const primeOrNot = isPrime(24);
console.log(primeOrNot);
