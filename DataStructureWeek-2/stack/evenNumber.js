class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    getSize(){
        return this.items.length;
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.items[this.items.length - 1];
    }

    print(){
        if(this.isEmpty()){
            return "Stack is empty"
        }else{
            console.log(this.items);
        }
    }
}

function evenNnumber(nums) {
    const stack = new Stack();

    for(let i = 0; i< nums.length; i++){
        stack.push(nums[i]);
    }

    let evenNos = [];
    while(!stack.isEmpty()){
        let num = stack.pop();
        if(num%2===0){
            evenNos.push(num);
        }
    }
    return evenNos;
}

console.log("Even Numbers", evenNnumber([2,5,2,7,8,4,7,4,12,67,43,44]));