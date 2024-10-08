class Node {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(str){
        let node = this.root;
        for (let i = str.length - 1; i>=0; i--) {
            let char = str[i];
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char]
        }
        node.isEnd = true; 
    }
    searchWithSuffix(suffix){
        let result = [];
        let node = this.root;
        for (let i = suffix.length - 1; i>=0; i--){
            let char = suffix[i];
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        this.collectWords(node, result, suffix);
        return result;
    }
    collectWords(node, result, suffix){
        if (node.isEnd) {
            return result.push(suffix);
        }else{
            for (const char in node.children) {
                this.collectWords(node.children[char], result, char + suffix);
            }
        }
    }
    
}
const trie = new Trie();
trie.insert('appge');
trie.insert('orange');
trie.insert('guava');
trie.insert('apricot');
console.log(trie);
console.log(trie.searchWithSuffix('e'));
