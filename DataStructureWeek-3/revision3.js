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
                return this.insertNodes(root.left, newNode);
            }
        }else{
            if (root.right === null) {
                root.right = newNode;
            }else{
                return this.insertNodes(root.right, newNode);
            }
        }
    }
    findSecondLargest(){
        if (!this.root) {
            return "empty tree";
        }
        if (!this.root.left && !this.root.right) {
            return "only root node is in the tree";
        }
        let current = this.root;
        while (current) {
            if (current.left && !current.right) {
                let secondLargest = current.left;
                while (secondLargest.right) {
                    secondLargest = secondLargest.right;
                }
                return secondLargest.value;
            }
            if (current.right && !current.right.left && !current.right.right) {
                return current.value;
            }
            current = current.right;
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(23);
bst.insert(12);
bst.insert(19);
bst.insert(26);
bst.insert(54);
bst.insert(34);
console.log(bst.findSecondLargest());