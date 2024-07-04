class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    insert(value){
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        }else{
            this.insertNodes(this.root, newNode);
        }
    }
    insertNodes(root, newNode){
        if (newNode.value < root.value) {
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNodes(root.left, newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNodes(root.right, newNode);
            }
        }
    }
    search(root, value){
        if(!root){
            return false;
        }else{
            if(root.value === value){
                return true;
            }else if(root.value > value){
                return this.search(root.left, value);
            }else{
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(33);
bst.insert(21);
bst.insert(46);
bst.insert(12);
bst.insert(17);
bst.insert(32);
console.log(bst.search(bst.root, 17));
console.log(bst.search(bst.root, 46));
console.log("preOrder");
bst.preOrder(bst.root);
console.log("inOrder");
bst.inOrder(bst.root);
console.log("postOrder");
bst.postOrder(bst.root);