function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }    
    return arr;
}

function inbuiltReverse(arr){
    for (let i = 0; i<arr.length-1; i++){
        arr.slice(i, 0);
    }
    return arr;
}

const arr = [2, 3, 6, 7, 8, 9, 4];
console.log(reverseArray(arr));
console.log(inbuiltReverse(arr));