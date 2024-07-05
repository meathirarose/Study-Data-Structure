function buildMaxHeap(arr) {
    let n = arr.length;
    for(let i = Math.floor((n/2)-1); i>=0; i--){
        heapify(arr, n, i);
    }
    return arr;
}

function heapify(arr, n, i) {
    let left = 2*i+1;
    let right = 2*i+2;
    let largest = i;

    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest !== i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function insert(arr, key){
    arr.push(key);
    let i = arr.length - 1;

    while (i>0) {
        let root = Math.floor((i-1)/2);
        if(arr[root] >= arr[i]){
            break;
        }
        [arr[i], arr[root]] = [arr[root], arr[i]];
        i = root;
    }
}

function deleteRoot(arr) {
    let n = arr.length;
    if(n === 0){
        return null;
    }

    let root = arr[0];
    arr[0] = arr[n-1];
    arr.pop();
    n--;

    heapify(arr, n, 0);
    return root;
}

function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}

const arr = [10, 2, 4, 16, 8, 23];
console.log(buildMaxHeap(arr));