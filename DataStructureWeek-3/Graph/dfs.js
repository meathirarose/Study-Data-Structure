function dfs(graph, startNode) {
    let result = [];
    let visited = new Set();
    let stack = [startNode];

    visited.add(startNode);

    while (stack.length > 0) {
        let currNode = stack.pop();
        result.push(currNode);
        for(let neighbor of graph[currNode]){  
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                stack.push(neighbor);
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

console.log(dfs(g, 'A'))