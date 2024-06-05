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
            return "Empty Stack";
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    print(){
        if (this.isEmpty()) {
            return "Empty Stack";
        }else{
            console.log(this.items);
        }
    }

}

// for reversing word by word

// function reverseString(string) {
//     let stack = new Stack();

//     const words = string.split(' ');
//     let reversedWords = [];

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
        
//         for (let j = 0; j < word.length; j++) {
//             stack.push(word[j]);
//         }

//         let reversedWord = "";
//         while (!stack.isEmpty()) {
//             reversedWord += stack.pop();
//         }

//         reversedWords.push(reversedWord);
//     }

//     return reversedWords.join(' ');
// }

// for reversing the string
function reverseString(string) {
    const stack = new Stack();

    for (let i = 0; i < string.length; i++) {
        stack.push(string[i]);
    }

    let reversedString = "";
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

const originalString = "Athira Rose John";
const stringReverse = reverseString(originalString);
console.log('====================================================================================')
console.log(originalString, "<-- Original String");
console.log(stringReverse, "<-- Reversed String");
console.log('====================================================================================')