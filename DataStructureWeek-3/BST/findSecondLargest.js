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

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNodes(this.root, newNode);
        }
    }

    insertNodes(root, newNode){
        if(root.value > newNode.value){
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

    findSecondLargest(){
        if (!this.root) {
            throw new Error('Tree is empty');
        }

        if (!this.root.left && !this.root.right) {
            return 'Only one node in the tree: ' + this.root.value;
        }
        
        let current = this.root;
        while (current) {
            if(current.left && !current.right){
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
bst.insert(10);
// bst.insert(8);
// bst.insert(15);
// bst.insert(3);
// bst.insert(9);
// bst.insert(13);
// bst.insert(18);
console.log(bst);
console.log(bst.findSecondLargest());