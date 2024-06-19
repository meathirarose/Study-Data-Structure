class Queue {
    constructor() {
        this.items = new Array();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    enqueue(value){
        this.items.push(value);
    }
    dequeue(){
        if(this.isEmpty())
            return -1;
        return this.items.shift();
    }
    front(){
        if(this.isEmpty())
            return -1;
        return this.items[0];
    }
    print(){
        if (this.isEmpty()) {
            return -1;
        }else{
            console.log("Queue values = ", this.items);
        }
    }
}

function quickSort(nums) {
    if(nums.length <= 1)
        return nums;

    let pivot = nums[nums.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i<nums.length - 1; i++){
        if(nums[i] < pivot){
            left.push(nums[i]);
        }else{
            right.push(nums[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function quickSortQueue(queue) {
    if(queue.length <= 1)
        return;

    let tempArray = [];
    while(!queue.isEmpty()){
        tempArray.push(queue.dequeue());
    }

    tempArray = quickSort(tempArray);

    for (let i = 0; i < tempArray.length; i++) {
        queue.enqueue(tempArray[i]);        
    }

}

const queue = new Queue();
queue.enqueue(23);
queue.enqueue(14);
queue.enqueue(65);
queue.enqueue(54);
console.log("Queue before sorting")
queue.print();

quickSortQueue(queue);
console.log("Queue after sorting")
queue.print();