function findMissingElement(arr, low, high) {
    let set = new Set();

    for (const num of arr) {
        set.add(num);
    }

    let missingElements = [];

    for(let i = low; i<=high; i++){
        if(!set.has(i))
            missingElements.push(i)
    }

    return missingElements;
}

const arr = [2, 3, 5, 1, 6, 7, 8];

console.log(findMissingElement(arr, 1, 15));