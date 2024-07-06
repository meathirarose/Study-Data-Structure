class Node{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(str){
        let node = this.root;
        for(let char of str){
            if(!node.children[char]){
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(str){
        let node = this.root;
        for(let char of str){
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
        for(let char of prefix){
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
        for(let char in node.children){
            this.collectWords(node.children[char], result, prefix+char);
        }
    }
}

const t = new Trie()
t.insert('apple')
t.insert('app')
t.insert('appllication')
t.insert('appolo')
console.log("Is the word 'aple' present?", t.search('aple'))
console.log(t.searchWithPrefix('appl'))