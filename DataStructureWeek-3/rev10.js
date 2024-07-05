class Graph {
    constructor(){
        this.adList = new Map();
    }

    addVertex(data){
        if (!this.adList.has(data)) {
            this.adList.set(data, new Set());
        }
    }

    insert(vertex, edge, isBirection){
        if (!this.adList.has(vertex)) {
            this.addVertex(vertex);
        }
        this.addVertex(edge);
        let vertex1 = this.adList.get(vertex);
        vertex1.add(edge);
        if (isBirection) {
            let vertex2 = this.adList.get(edge);
            vertex2.add(vertex);
        }
    }

    display(){
        for (const [vertex, edge] of this.adList) {
            console.log(`${vertex} => ${[...edge]}`);
        }
    }

    bfs(startNode){
        let result = [];
        let visited = new Set();
        let queue = [startNode];

        visited.add(startNode);

        while (queue.length > 0) {
            let currentNode = queue.shift();
            result.push(currentNode);
            for (const neighbor of this.adList.get(currentNode)) {
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    dfs(startNode){
        let result = [];
        let visited = new Set();
        let stack = [startNode];

        visited.add(startNode);

        while (stack.length > 0) {
            let currentNode = stack.pop();
            result.push(currentNode);
            for (const neighbor of this.adList.get(currentNode)) {
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }
        return result;
    }
}

const g = new Graph();
g.insert('A','B', true);
g.insert('B','C', false);
g.insert('C','D', true);
g.insert('D','A', true);
g.display();
console.log("bfs from starting node 'A'", g.bfs('A'));
console.log("dfs from starting node 'A'", g.dfs('A'));


