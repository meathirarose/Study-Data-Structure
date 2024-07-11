class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if (this.root  === null) {
            this.root = newNode;
        }else{
            this.insertNodes(this.root, newNode);
        }
    }
    insertNodes(root, newNode){
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            }else{
                this.insertNodes(root.left, newNode);
            }
        }else{
            if (root.right === null) {
                root.right = newNode;
            }else{
                this.insertNodes(root.right, newNode);
            }
        }
    }
    isPrime(num){
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }            
        }
        return true;
    }
    postOrder(root){
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            if (this.isPrime(root.value)) {
                console.log(root.value);
            }
        }
    }
    isPowerOfTwo(num){
        return num > 0 && (num & (num-1)) === 0;
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left);
            if (this.isPowerOfTwo(root.value)) {
                console.log(root.value);
            }
            this.inOrder(root.right);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(12);
bst.insert(16);
bst.insert(21);
bst.insert(7);
bst.insert(9);
console.log("Print prime numbers");
bst.postOrder(bst.root);
console.log("Print Power of two");
bst.inOrder(bst.root);