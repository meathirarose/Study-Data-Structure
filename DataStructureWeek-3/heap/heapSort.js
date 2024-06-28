function buildMaxHeap(arr) {
    let n = arr.length;
    for (let i = Math.floor(n/2 - 1); i >=0; i--) {
        heapify(arr, n, i);
    }
}

function heapify(arr, n, i) {
    let left = 2*i + 1;
    let right= 2*i + 2;
    let largest = i;

    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest!==i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    buildMaxHeap(arr);

    for(let i = n-1; i>0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, n, 0);
    }

    return arr;
}

const arr = [23, 43, 56, 12, 65, 76, 32];
console.log("Array after sorting :", heapSort(arr));