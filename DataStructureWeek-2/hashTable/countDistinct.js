function countDistinct(arr){
    // let hash = new Map();

    // for (const num of arr) {
    //     if(!hash.has(num))
    //         hash.set(num, 1);
    //     else
    //         hash.set(num, (hash.get(num) + 1));
    // }

    // let count = 0;

    // for (const num of arr) {
    //     if(hash.get(num) === 1)
    //         count++;
    // }
    // return count;

    let hash = new Set();

    for(const num of arr){
        hash.add(num)
    }

    return hash.size;
}

console.log(countDistinct([2, 3, 4, 2, 5, 4, 6, 7, 6, 8]));