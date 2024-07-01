class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word){
        let current = this.root;

        for(let char of word){
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char);
        }
        current.isEndOfWord = true;
    }
} 

function printTrie(root, prefix = "") {
    if(root.isEndOfWord){
        console.log(prefix);
    }

    for(let [char, childNode] of root.children){
        printTrie(childNode, prefix + char);
    }
}

let trie = new Trie();
trie.insert("apple");
trie.insert("application");
trie.insert("apply");

printTrie(trie.root);