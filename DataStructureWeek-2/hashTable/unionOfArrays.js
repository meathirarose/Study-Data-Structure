function unionOfArrays(arr1, arr2) {
    let hashSet = new Set();

    for (const num of arr1) {
        hashSet.add(num);
    }

    for (const num of arr2) {
        hashSet.add(num);
    }

    return Array.from(hashSet);
}

const arr1 = [2, 4, 5, 6, 7, 2, 1, 9];
const arr2 = [4, 2, 6, 9, 8, 1]
console.log(unionOfArrays(arr1, arr2));