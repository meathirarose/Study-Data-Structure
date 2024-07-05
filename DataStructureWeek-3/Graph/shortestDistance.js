class Graph {
    constructor() {
        this.adList = new Map();
    }
    addVertex(data){
        if(!this.adList.has(data)){
            this.adList.set(data, new Set());
        }
    }
    insert(vertex, edge, isBirection){
        if(!this.adList.has(vertex)){
            this.addVertex(vertex);
        }
        this.addVertex(edge);
        const vertex1 = this.adList.get(vertex);
        vertex1.add(edge);
        if(isBirection){
            const vertex2 = this.adList.get(edge);
            vertex2.add(vertex);
        }
    }
    display(){
        for (const [vertex, edge] of this.adList) {
            console.log(`${vertex} => ${[...edge]}`);
        }
    }
    shortestDistance(startVertex, targetVertex){
        if(startVertex === targetVertex){
            return 0;
        }
        let queue = [startVertex];
        let visited = new Set([startVertex]);
        let distances = new Map([[startVertex, 0]]);

        while (queue.length > 0) {
            let current = queue.shift();
            let currentDistance = distances.get(current);

            for (const neighbour of this.adList.get(current)) {
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                    distances.set(neighbour, currentDistance+1);

                    if(neighbour === targetVertex){
                        return distances.get(neighbour);
                    }
                }
            }
        }
        return Infinity;
    }
}


const g = new Graph();
console.log(g)
g.insert('A','B',true)
g.insert('B','C',false)
g.insert('C','D',true)
g.insert('D','A',true)
g.insert('D','B',true)
g.display();

console.log("Shortest distance between A and C:", g.shortestDistance('A', 'C')); 
console.log("Shortest distance between A and D:", g.shortestDistance('A', 'D')); 
console.log("Shortest distance between B and D:", g.shortestDistance('B', 'D')); 
console.log("Shortest distance between C and A:", g.shortestDistance('C', 'A')); 