function bfs(graph, startNode){
    let result = [];
    let visited = new Set();
    let queue = [startNode];

    visited.add(startNode);
    
    while(queue.length > 0){
        let currNode = queue.shift();
        result.push(currNode);
       for(let neighbor of graph[currNode]){
        if(!visited.has(neighbor)){
            visited.add(neighbor);
            queue.push(neighbor);
        }
       }
    }
    return result;
}



const g = {
    'A': ['B','D'],
    'B': ['C', 'D', 'A'],
    'C': ['D'],
    'D': ['C','A', 'B']
}

console.log(bfs(g, 'A'))