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
    closestValue(target){
        return this.findClosestValue(this.root, target, this.root.value);
    }
    findClosestValue(root, target, closest){
        if (root.value === null) {
            return closest;
        }
        if (Math.abs(target - closest) > Math.abs(target - root.value)) {
            return root.value;
        }
        if (target < root.value) {
            return this.findClosestValue(root.left, target, closest);
        }else if (target > root.value){
            return this.findClosestValue(root.right, target, closest);
        }else{
            return closest;
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(32);
bst.insert(12);
bst.insert(22);
bst.insert(43);
bst.insert(34);
bst.insert(56);
bst.insert(9);
console.log("closest value", bst.closestValue(56));