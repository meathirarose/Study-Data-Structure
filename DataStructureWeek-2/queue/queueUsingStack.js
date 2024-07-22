class QueueUsingStacks {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(x) {
      this.stack1.push(x);
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      if (this.stack2.length === 0) {
        throw new Error("Queue is empty");
      }
      return this.stack2.pop();
    }
  
    front() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      if (this.stack2.length === 0) {
        throw new Error("Queue is empty");
      }
      return this.stack2[this.stack2.length - 1];
    }
  
    empty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    print() {
      const tempStack1 = [...this.stack1];
      const tempStack2 = [...this.stack2].reverse();
      console.log([...tempStack2, ...tempStack1]);
    }
  }
  
  // Usage of queue

  const queue = new QueueUsingStacks();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.print();    // [1, 2, 3]
  console.log(queue.dequeue());    // 1
  queue.print();    // [2, 3]
  console.log(queue.front());      // 2
  console.log(queue.empty());      // false
  