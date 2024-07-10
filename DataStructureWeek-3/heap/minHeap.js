function buildMinHeap(arr){
    let n = arr.length;
    for(let i=Math.floor(n/2)-1; i>=0; i--){
        heapify(arr,n,i )
    }
    return arr;
}

function heapify(arr,n,i){
    let left = 2*i + 1;
    let right = 2*i + 2;
    let smallest = i;

    if(left < n && arr[left] < arr[smallest]){
        smallest = left;
    }
    
    if(right < n && arr[right] < arr[smallest]){
        smallest = right;
    }

    if(smallest !== i){
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
        heapify(arr, n, smallest);
    }
}

function insert(arr, key){
    arr.push(key);
    let i = arr.length - 1;
    
    while (i > 0) {
        let root = Math.floor((i-1)/2);
        if(arr[root] <= arr[i]){
            break;
        }
        [arr[i], arr[root]] = [arr[root], arr[i]];
        i = root;
    }
}

function deleteRoot(arr) {
    let n = arr.length;
    if (n === 0) {
        return null;
    }

    let root = arr[0];
    arr[0] = arr[n-1];
    arr.pop();
    n--;

    heapify(arr, n, 0);
    return root;
}

function findMin(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr[0];
}

let arr = [10,15,30,40,50,100,40];
console.log('====================================================================================')
console.log("after heapify");
console.log(buildMinHeap(arr));
console.log('====================================================================================')
// insert(arr, 5);
// console.log("after insertion");
// console.log(buildMinHeap(arr));
// console.log('====================================================================================')
// let deletedElement = deleteRoot(arr);
// console.log("Deleted element:", deletedElement);
// console.log("Heap after deletion:", arr);
// console.log('====================================================================================')
// console.log("Minimum element :", findMin(arr));
// console.log('====================================================================================')
