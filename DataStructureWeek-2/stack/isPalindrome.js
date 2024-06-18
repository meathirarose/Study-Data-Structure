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
        if(this.isEmpty())
            return "Stack is empty";
        return this.items.pop();
    }

    print(){
        if(this.isEmpty())
            return "Stack is empty";
        console.log(this.items);
    }

}

function isPalindrome(num) {
    const str = num.toString();
    const mid = Math.floor(str.length/2);

    let stack = new Stack();

    for (let i = 0; i < mid; i++) {
        stack.push(str[i]);
    }

    for (let i = mid; i < str.length; i++) {
        if(str[i] !== stack.pop()){
            return false;
        }        
    }
    return true;
}

console.log(isPalindrome(1221));

