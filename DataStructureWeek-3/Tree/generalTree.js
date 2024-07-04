class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(parentValue, value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        this.insertNodes(this.root, parentValue, newNode);
        return this;
    }

    insertNodes(node, parentValue, newNode){
        if(node.value === parentValue){
            node.children.push(newNode);
            return;
        }
        for(let child of node.children){
            this.insertNodes(child, parentValue, newNode);
        }
    }
}
