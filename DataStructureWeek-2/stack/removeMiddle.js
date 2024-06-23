class Stack {
    constructor() {
        this.items = new Array();
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
    get(){
        return this.items;
    }
    pop(){
        if (this.isEmpty()) {
            return "empty";
        }
        return this.items.pop();
    }
    print(){
        if (this.isEmpty()) {
            return "empty";
        }else{
            console.log(this.items);
        }
    }
}

function removeMiddle(stack) {
    if (stack.isEmpty()) {
        return "empty";
    }
    let temp = stack.get();
    let arr = [];
    let mid = Math.floor(stack.getSize()/2);

    for (let i = 0; i < temp.length; i++) {
        if (i !== mid) {
            arr.push(temp[i]);
        }     
    }

    return arr;

}

const stack = new Stack();
stack.push(43);
stack.push(23);
stack.push(76);
stack.push(21);
stack.push(43);
stack.print();
console.log(removeMiddle(stack));
