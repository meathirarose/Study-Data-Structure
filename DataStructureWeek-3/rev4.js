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
        for (const char of str) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(str){
        let node = this.root;
        for (const char of str) {
            if(!node.children[char]){
                return false;
            }
            node = node.children[char];
        }
        return node.isEnd;
    }

    searchWithPrefix(prefix){
        let result = [];
        let node = this.root;
        for (const char of prefix) {
            if(!node.children[char]){
                return result;
            }
            node = node.children[char];
        }
        this.collectWords(node, result, prefix);
        return result;
    }

    collectWords(node, result, prefix){
        if(node.isEnd){
            result.push(prefix);
        }
        for (const char in node.children) {
            this.collectWords(node.children[char], result, prefix + char);
        }
    }
}



const trie = new Trie();
trie.insert('apple');
trie.insert('apply');
trie.insert('application');
console.log(trie);
console.log(trie.search('aple'))
console.log(trie.searchwithPrefix('appl'))