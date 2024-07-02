function BreadthFirstSearch(graph, startNode) {
    let result = [];
    let visited = new Set();
    let queue = [startNode];

    visited.add(startNode);

    while (queue.length) {
        let currentNode = queue.shift();
        result.push(currentNode);
        for (const neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
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

console.log(BreadthFirstSearch(g, 'A'))