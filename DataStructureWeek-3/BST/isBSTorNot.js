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
        return this.checkBST(this.root, -Infinity, Infinity);
    }

    checkBST(root, min, max){
        if(root === null){
            return true;
        }
        if(root.value <= min || root.value >= max){
            return false;
        }
        return this.checkBST(root.left, min, root.value) && this.checkBST(root.right, root.value, max);
    }
}

const isBstorNot = new BST();
isBstorNot.insert(23);
isBstorNot.insert(43);
isBstorNot.insert(12);
isBstorNot.insert(76);
isBstorNot.insert(34);
console.log("Is BST or not:", isBstorNot.isBST());
