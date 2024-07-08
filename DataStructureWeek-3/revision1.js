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

    search(root, value){
        if (!root) {
            return false;
        }else{
            if (root.value === value) {
                return true;
            }else if(value < root.value){
                return this.search(root.left, value);
            }else{
                return this.search(root.right, value);
            }
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(43);
bst.insert(32);
bst.insert(12);
bst.insert(45);
bst.insert(65);
console.log(bst);
console.log(bst.search(bst.root, 10));
