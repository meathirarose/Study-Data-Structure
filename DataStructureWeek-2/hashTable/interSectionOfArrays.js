function intersectionOfArrays(arr1, arr2) {
    let hashSet = new Set();

    for (const num of arr1) {
        hashSet.add(num);
    }

    let intersection = [];

    for(const num of arr2){
        if(hashSet.has(num)){
            intersection.push(num);
            hashSet.delete(num);
        }
        
    }
    return intersection;
}
const arr1 = [2, 3, 5, 6, 7, 8, 1, 3];
const arr2 = [4, 3, 6, 8, 9, 0]
console.log(intersectionOfArrays(arr1, arr2));