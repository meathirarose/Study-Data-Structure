class Graph{
    constructor(){
        this.adList = new Map();
    }

    addVertex(data){
        if(!this.adList.has(data)){
            this.adList.set(data, new Set())
        }
    }

    insert(vertex, edge, isBirection){
        if(!this.adList.has(vertex)){
            this.addVertex(vertex);
        }
        this.addVertex(edge);
        const vertex1 = this.adList.get(vertex);
        vertex1.add(edge)
        if(isBirection){
            const vertex2 = this.adList.get(edge);
            vertex2.add(vertex);
        }
    }

    display(){
        for(let [vertex, edge] of this.adList){
            console.log(`${vertex} => ${[...edge]}`);
        }
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
