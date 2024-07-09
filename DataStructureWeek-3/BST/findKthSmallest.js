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
        if (root.value > newNode.value) {
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
    findKthSmallest(k){
        const result = {count: 0, value: null};
        this.reverseInorderTraversal(this.root, k, result);
        return result.value;
    }
    reverseInorderTraversal(root, k, result){
        if (root === null || result.count >= k) {
            return;
        }
        this.reverseInorderTraversal(root.left, k, result);
        result.count++;
        if (result.count === k) {
            result.value = root.value;
            return;
        }
        this.reverseInorderTraversal(root.right, k, result);
    }
}

const bst = new BinarySearchTree();
bst.insert(23);
bst.insert(12);
bst.insert(34);
bst.insert(43);
bst.insert(54);
bst.insert(18);
bst.insert(26);
console.log("3rd smallest = ", bst.findKthSmallest(3));