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

    if(left<n && arr[left]<arr[smallest]){
        smallest = left;
    }
    if(right<n && arr[right]<arr[smallest]){
        smallest = right;
    }

    if(smallest !== i){
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
        heapify(arr, n, smallest);
    }
}

let arr = [25,15,22,7,10,3,4];

console.log(buildMinHeap(arr));

