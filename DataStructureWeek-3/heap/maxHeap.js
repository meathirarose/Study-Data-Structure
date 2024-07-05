function buildMaxHeap(arr) {
    n = arr.length;
    for(let i = Math.floor(n/2 - 1); i>=0; i--){
        heapify(arr, n, i);
    }
    return arr;
}

function heapify(arr, n, i) {
    let left = 2*i + 1;
    let right = 2*i + 2;
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

const arr = [23, 4, 5, 32, 65, 12, 6, 54];
console.log(buildMaxHeap(arr));