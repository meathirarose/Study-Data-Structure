function dfs(graph, startNode) {
    let result = [];
    let visited = new Set();
    let stack = [startNode];

    visited.add(startNode);

    while (stack.length) {
        let currentNode = stack.pop();
        result.push(currentNode);
        for (const neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
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