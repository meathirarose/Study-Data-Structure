class Node{
    constructor(data){
        this.data = data;
        this.left = this.right = null;
    }
}


function removeNode(node, data){
    if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
    }else if(data > node.data){
        node.right = removeNode(node.right, data);
        return node;
    }else{
        if(!node.left && !node.right){
            node = null;
            return node;
        }
        
        if(!node.left){
            node = node.right;
            return node;
        }
        
        if(!node.right){
            node = node.left;
            return node;
        }
        
        let rightMinNode = findMinNode(node.right);
        node.data = rightMinNode.data;
        node.right = removeNode(node.right, rightMinNode.data);
        return node;
    }
}

function findMinNode(node){
    if(node.left){
        return findMinNode(node.left)
    }
    return node;
}

const root = new Node(10);
root.left = new Node(6);
root.right = new Node(15);
root.left.left = new Node(4);
root.left.right = new Node(8);
root.right.left = new Node(12);
root.right.right = new Node(20);

removeNode(root, 10)
console.log(root)