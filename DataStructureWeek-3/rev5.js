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

    minValue(root){
        if(!root.left){
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
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value){
        if (root === null) {
            return null;
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value);
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value);
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }
            if(!root.right){
                return root.left;
            }
            root.value = this.minValue(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
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

console.log("Minimum value = ", bst.minValue(bst.root));
console.log("Maximum value = ", bst.maxValue(bst.root));

bst.delete(17);
bst.preOrder(bst.root);