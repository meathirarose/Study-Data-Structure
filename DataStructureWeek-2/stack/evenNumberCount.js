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
        return this.items.pop();
    }

    print(){
        if (this.isEmpty()) 
            return "Stack Empty";
        else 
            console.log(this.items);
    }

}

function countEvenNumbers(nums) {

    let stack = new Stack();

    for (let i = 0; i < nums.length; i++) {
        stack.push(nums[i]);        
    }

    let count = 0;

    while(!stack.isEmpty()){
        if(stack.pop()%2 === 0){
            count++;
        }
    }

    return count;

}

console.log(countEvenNumbers([2, 3, 6, 4, 9, 8, 4, 8]));