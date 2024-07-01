class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.wordCount = 0;
    }
}

function insertKey(root, key) {
    let currentNode = root;

    for (let i = 0; i < key.length; i++) {
        let charIndex = key.charCodeAt(i) - 97;

        if (!currentNode.children[charIndex]) {
            currentNode.children[charIndex] = new TrieNode();
        }

        currentNode = currentNode.children[charIndex];
    }
    currentNode.wordCount++;
}

let root = new TrieNode();
insertKey(root, "apple");
insertKey(root, "application");
insertKey(root, "apply");