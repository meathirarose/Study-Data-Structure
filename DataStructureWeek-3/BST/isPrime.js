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
        if (this.root === null) {
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
    isPrime(n){
        if (n <= 1) {
            return false;
        }
        for (let i = 2; i<=Math.sqrt(n); i++){
            if (n%i === 0) {
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
}

const bst = new BinarySearchTree();
bst.insert(12);
bst.insert(8);
bst.insert(3);
bst.insert(19);
bst.insert(13);
bst.insert(1);
bst.postOrder(bst.root);
