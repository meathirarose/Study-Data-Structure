function findPairs(arr, sum) {
    let set = new Set();
    let pairs = [];

    for (const num of arr) {
        set.add(num);
    }

    for (let i = 0; i < arr.length; i++) {
        let temp = sum - arr[i];
        
        if(set.has(temp) && temp!==arr[i]){
            pairs.push([arr[i], temp]);
            set.delete(temp);
            set.delete(arr[i]);
        }
    }
    return pairs;
}

const arr = [2, 4, 1, 8, 3, 9];
console.log(findPairs(arr, 11));
