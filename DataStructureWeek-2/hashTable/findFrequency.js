function findNumberFrequency(arr){

    let hashTable = new Map();

    for (const num of arr) {
        if(!hashTable.has(num))
            hashTable.set(num, 1);
        else
            hashTable.set(num, (hashTable.get(num) + 1));
    }

    return hashTable;

}

console.log(findNumberFrequency([2,1,3,5,3,5,2,6,7,7,8,5,8,9,5,9]));