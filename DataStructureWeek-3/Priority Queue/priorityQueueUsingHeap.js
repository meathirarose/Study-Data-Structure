class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    buildMinHeap(arr){
        let n = arr.length;
        for(let i = Math.floor(n/2)-1; i>=0; i--){
            this.heapify(arr, n, i);
        }
        this.heap = arr;
    }

    heapify(arr, n, i){
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;

        if(left < n && arr[left] < arr[smallest]){
            smallest = left;
        }
        if(right < n && arr[right] < arr[smallest]){
            smallest = right;
        }
        if(smallest !== i){
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            this.heapify(arr, n, smallest);
        }
    }

    insert(key){
        this.heap.push(key);
        let i = this.heap.length-1;

        while (i > 0) {
            let root = Math.floor((i-1)/2);
            if(this.heap[root] <= this.heap[i]){
                break;
            } 
            [this.heap[i], this.heap[root]] = [this.heap[root], this.heap[i]];
            i = root;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }

    extractMin(){
        let n = this.heap.length;
        if(n === 0){
            return null;
        }

        let root = this.heap[0];
        this.heap[0] = this.heap[n-1];
        this.heap.pop();
        n--;

        this.heapify(this.heap, n, 0);
        return root;
    }
}

const pq = new PriorityQueue();
pq.buildMinHeap([25, 15, 22, 7, 10, 3, 4]);

console.log("Priority Queue after build:");
console.log(pq.heap);

pq.insert(5);
console.log("Priority Queue after inserting 5:");
console.log(pq.heap);

let deletedElement = pq.extractMin();
console.log("Deleted element (min priority):", deletedElement);
console.log("Priority Queue after deletion:");
console.log(pq.heap);