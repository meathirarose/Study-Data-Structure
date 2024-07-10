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
    findKthLargest(k){
        const result = {count: 0, value: null};
        this.reverseInorderTraversal(this.root, k, result);
        return result.value;
    }
    reverseInorderTraversal(root, k, result){
        if (root === null || result.count >= k) {
            return;
        }
        this.reverseInorderTraversal(root.right, k, result);
        result.count++;
        if (result.count === k) {
            result.value = root.value;
            return;
        }
        this.reverseInorderTraversal(root.left, k, result);
    }
    isPowerOfTwo(n){
        return n> 0 && (n & (n-1)) === 0;
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

const bst = new BST();
bst.insert(32);
bst.insert(24);
bst.insert(12);
bst.insert(43);
bst.insert(54);
bst.insert(8);
bst.insert(53);
console.log("3rd largest = ", bst.findKthLargest(3));
bst.findIsPowerOfTwo(bst.root);

