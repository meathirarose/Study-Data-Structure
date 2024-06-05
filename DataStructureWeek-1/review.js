Vishnu G R
12:21
function looper(iter) {
    for (let i = 0; i < iter; i++) {
        console.log("Iteration " + (i + 1));
    }
}
function looper(iter) {
    for (let i = 0; i < iter; i += 2) {
        console.log("Iteration " + (i + 1));
    }
}
Vishnu G R
12:23
function looper(iter) {
    for (let i = 0; i < iter; i += 2) {
        console.log("Iteration " + (i + 1));
    }
    for (let i = 0; i < iter; i++) {
        console.log("Iteration " + (i + 1));
    }
}
function looper(iter) {
    for (let i = 0; i < iter; i += 2) {
        console.log("Outer Iteration " + (i + 1));
        for (let j = i; j < i + 2; j++) {
            console.log("Inner Iteration " + (j + 1));
        }
    }
}
Vishnu G R
12:28
const str = "apple, something,javascript,,2";
Vishnu G R
12:54
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry", "Mango", "Pineapple", "Kiwi", "Watermelon", "Cherry"];

