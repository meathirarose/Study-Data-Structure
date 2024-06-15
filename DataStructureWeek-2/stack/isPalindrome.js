// Define a stack class
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

// Function to check if a number is a palindrome using a stack
function isPalindrome(num) {
    let str = num.toString();
    let len = str.length;
    let mid = Math.floor(len / 2);

    let stack = new Stack();

    // Push first half of characters onto the stack
    for (let i = 0; i < mid; i++) {
        stack.push(str[i]);
    }

    // Compare with second half of characters
    for (let i = mid; i < len; i++) {
        if (str[i] !== stack.pop()) {
            return false; 
        }
    }

    return true; 
}

console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false
