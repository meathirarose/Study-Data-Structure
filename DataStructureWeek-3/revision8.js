class Graph {
    constructor() {
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
    displayGraph(){
        for (const [vertex, edge] of this.adList) {
            console.log(`${vertex} => ${[...edge]}`);
        }
    }
    bfs(startNode){
        let result = [];
        let visited = new Set();
        let queue = [startNode];

        while (queue.length) {
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

        while (stack.length) {
            let currentNode = stack.pop();
            result.push(currentNode);
            for (const neighbor of this.adList.get(currentNode)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }
        return result;
    }
}

const graph = new Graph();
graph.insert('A', 'B', true);
graph.insert('B', 'C', false);
graph.insert('C', 'D', true);
graph.insert('D', 'E', false);
graph.insert('E', 'A', true);
graph.displayGraph();
console.log("bfs traversal= ", graph.bfs('A'));
console.log("dfs traversal= ", graph.dfs('A'));
