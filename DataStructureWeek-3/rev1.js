class Graph {
    constructor() {
        this.adList = new Map();
    }

    addVertex(value){
        if(!this.adList.has(value)){
            this.adList.set(value, new Set());
        }
    }

    insert(vertex, edge, isBirection){
        if(!this.adList.has(vertex)){
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
}

const graph = new Graph();
graph.insert('A', 'B', true);
graph.insert('B', 'C', true);
graph.insert('C', 'A', true);
graph.display();
