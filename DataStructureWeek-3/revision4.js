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
    findKthLargest(k){
        const result = { count:0, value: null };
        bst.reverseInorderTraversal(this.root, k, result);
        return result.value;
    }
    reverseInorderTraversal(root, k, result){
        if (root === null || result.count >= k) {
            return;
        }
        this.reverseInorderTraversal(root.right, k, result);
        result.count++;
        if(result.count === k){
            result.value = root.value;
            return;
        }
        this.reverseInorderTraversal(root.left, k, result);
    }
}

const bst = new BinarySearchTree();
bst.insert(26);
bst.insert(12);
bst.insert(34);
bst.insert(54);
bst.insert(45);
bst.insert(65);
bst.insert(21);
console.log(bst.findKthLargest(1));
console.log(bst.findKthLargest(2));
console.log(bst.findKthLargest(3));