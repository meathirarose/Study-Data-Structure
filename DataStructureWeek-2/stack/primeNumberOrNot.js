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

    primeOrNot(value){
        if(value <= 1) return false;
        for(let i = 1; i<= Math.sqrt(value); i++){
            if (value === 2 || value%i !== 0 && value%3 !==0 && value%2 !==0) return true;
        }
        return false;
    }

}

function findPrimeOrNot(nums){
    let stack = new Stack();

    for(let i = 0; i<nums.length; i++){
       if(stack.primeOrNot(nums[i]) === true)
            stack.push(nums[i])
    }
    return stack;
}

const nums = [2,13,15,17,19,12,10];
const primeOrNot = findPrimeOrNot(nums);
console.log(primeOrNot);
