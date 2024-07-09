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
        if(this.root === null){
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
        if(!root){
            return false;
        }
        if(root.value === value){
            return true;
        }else if(root.value > value){
            return this.search(root.left, value);
        }else{
            return this.search(root.right, value);
        }
    }
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    levelOrder(){
        let queue = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }
    minValue(root){
        if (!root.left) {
            return root.value;
        }else{
            return this.minValue(root.left);
        }
    }
    maxValue(root){
        if(!root.right){
            return root.value;
        }else{
            return this.maxValue(root.right);
        }
    }
    delete(value){
        this.root =  this.deleteNode(this.root, value);
    }
    deleteNode(root, value){
        if (root === null) {
            return root;
        }
        if(root.value > value){
            root.left = this.deleteNode(root.left, value);
        }else if(root.value < value){
            root.right = this.deleteNode(root.right, value);
        }else{
            if (!root.left && !root.right) {
                return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.value = this.minValue(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}

const bst = new BinarySearchTree();
bst.insert(32);
bst.insert(43);
bst.insert(65);
bst.insert(12);
bst.insert(21);
bst.insert(27);
console.log(bst);
console.log(bst.search(bst.root, 34));
console.log("pre order");
bst.preOrder(bst.root);
console.log("in order");
bst.inOrder(bst.root)
console.log("post order");
bst.postOrder(bst.root);
console.log("level order");
bst.levelOrder();
console.log("min",bst.minValue(bst.root));
console.log("max",bst.maxValue(bst.root));
bst.delete(12);
console.log("after delete = ");
bst.inOrder(bst.root);