function buildMinHeap(arr) {
    let n = arr.length;
    for (let i = Math.floor((n-1)/2); i>= 0; i--){
        heapify(arr, n, i);
    }
    return arr;
}

function heapify(arr, n, i) {
    let left = 2*i+1;
    let right = 2*i+2;
    let smallest = i;

    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }
    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }
    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, n, smallest);
    }
}

function insert(arr, key) {
    arr.push(key);
    let i = arr.length - 1;
    while (i > 0) {
        let root = Math.floor((i-1)/2);
        if (arr[root] <= arr[i]) {
            break;
        }
        [arr[i], arr[root]] = [arr[root], arr[i]];
        i = root;
    }
}

function deleteRoot(arr) {
    let n = arr.length;
    if( n === 0){
        return null;
    }

    let root = arr[0];
    arr[0] = arr[n-1];
    arr.pop();
    n--;

    heapify(arr, n, 0);
    
    return root;
}

function minValue(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr[0];
}

function heapSortDescending(arr) {
    let n = arr.length;
    buildMinHeap(arr);
    for (let i = n-1; i>0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0)
    }
    return arr;
}

const arr = [2, 4, 5, 3, 6, 7, 8];
console.log("initial heap", buildMinHeap(arr));
insert(arr, 1);
console.log("after insertion", buildMinHeap(arr));
deleteRoot(arr);
console.log("after deleting root", buildMinHeap(arr));
console.log("min value =", minValue(arr));
console.log("after sort", heapSortDescending(arr));