class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }
    
    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }
    isBST(){
        return this.checkBstOrNot(this.root, -Infinity, Infinity);
    }
    checkBstOrNot(root, min, max){
        if (root === null) {
            return true;
        }
        if (root.value <= min || root.value >= max) {
            return false;
        }
        return this.checkBstOrNot(root.left, min, root.value) && this.checkBstOrNot(root.right, root.value, max);
    }
}

const bst = new BST();
bst.insert(23);
bst.insert(12);
bst.insert(34);
bst.insert(54);
bst.insert(42);
bst.insert(16);
console.log(bst.isBST());
