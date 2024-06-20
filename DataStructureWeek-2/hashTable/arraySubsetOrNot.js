function isSubset(arr1, arr2, m, n) {
    
    let hashSet = new Set();

    for (let i = 0; i < m; i++) {
        if (!hashSet.has(arr1[i])) {
            hashSet.add(arr1[i]);
        }        
    }

    for (let i = 0; i < n; i++) {
        if (!hashSet.has(arr2[i])) {
            return false;
        }        
    }
    return true;
}

let arr1 = [12, 3, 4, 34, 67, 54, 32, 9];
let arr2 = [3, 4, 12, 28];
if(isSubset(arr1, arr2, arr1.length, arr2.length))
    console.log("Array2 is a subset of Array1");
else
    console.log("Array2 is not a subset of Array1");