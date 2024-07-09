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
        if (root.value > newNode.value) {
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
    isPowerOfTwo(n){
        return n > 0 && (n & (n-1)) === 0;
    }
    findIsPowerOfTwo(root){
        if (root) {
            this.findIsPowerOfTwo(root.left);
            if (this.isPowerOfTwo(root.value)) {
                console.log(root.value);
            }
            this.findIsPowerOfTwo(root.right);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(5);
bst.insert(8);
bst.insert(11);
bst.insert(16);
bst.insert(7);
bst.findIsPowerOfTwo(bst.root);