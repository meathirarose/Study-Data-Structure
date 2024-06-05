function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > curr) {
            arr[j + 1]  = arr[j];
            j--;
        }       
        arr[j + 1] = curr 
    }
    return arr;
}

let stream = [];
const nums = [11, 16, 12, 14, 13];
nums.forEach(num => {
    stream.push(num),
    insertionSort(stream),
    console.log(stream)
})